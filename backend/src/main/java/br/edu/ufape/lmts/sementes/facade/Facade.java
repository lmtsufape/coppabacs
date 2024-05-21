package br.edu.ufape.lmts.sementes.facade;

import java.io.File;
import java.io.InputStream;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.edu.ufape.lmts.sementes.controller.dto.request.TabelaBancoSementesRequest;
import br.edu.ufape.lmts.sementes.service.exception.AuthenticationException;
import br.edu.ufape.lmts.sementes.service.exception.AuthorizationException;
import br.edu.ufape.lmts.sementes.service.exception.CustomDatabaseException;
import br.edu.ufape.lmts.sementes.service.exception.InvalidItemStateException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.auth.UserDetailsServiceImpl;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Admin;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;
import br.edu.ufape.lmts.sementes.model.Conjuge;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import br.edu.ufape.lmts.sementes.model.Cultura;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;
import br.edu.ufape.lmts.sementes.model.Doenca;
import br.edu.ufape.lmts.sementes.model.Empalhamento;
import br.edu.ufape.lmts.sementes.model.Endereco;
import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;
import br.edu.ufape.lmts.sementes.model.Item;
//import br.edu.ufape.lmts.sementes.model.ObjetosBancoSementes;
import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.model.SementePraga;
import br.edu.ufape.lmts.sementes.model.Sementes;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;
import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;
import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;
import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.model.infraestruturaHidrica;
import br.edu.ufape.lmts.sementes.model.sementeDoenca;
import br.edu.ufape.lmts.sementes.service.AdminService;
import br.edu.ufape.lmts.sementes.service.AgricultorService;
import br.edu.ufape.lmts.sementes.service.AtividadeRuralService;
import br.edu.ufape.lmts.sementes.service.BancoSementesServiceInterface;
import br.edu.ufape.lmts.sementes.service.CaracteristicasAgronomicasService;
import br.edu.ufape.lmts.sementes.service.ConjugeService;
import br.edu.ufape.lmts.sementes.service.CoppabacsService;
import br.edu.ufape.lmts.sementes.service.CulturaService;
import br.edu.ufape.lmts.sementes.service.DoacaoUsuarioService;
import br.edu.ufape.lmts.sementes.service.DoencaService;
import br.edu.ufape.lmts.sementes.service.EmpalhamentoService;
import br.edu.ufape.lmts.sementes.service.EnderecoService;
import br.edu.ufape.lmts.sementes.service.FileService;
import br.edu.ufape.lmts.sementes.service.FinalidadeService;
//import br.edu.ufape.lmts.sementes.service.GerenteService;
import br.edu.ufape.lmts.sementes.service.GerenteServiceInterface;
import br.edu.ufape.lmts.sementes.service.InfraestruturaComunidadeService;
import br.edu.ufape.lmts.sementes.service.ItemService;
//import br.edu.ufape.lmts.sementes.service.ObjetosBancoSementesService;
import br.edu.ufape.lmts.sementes.service.PostServiceInterface;
import br.edu.ufape.lmts.sementes.service.ProducaoSementesService;
import br.edu.ufape.lmts.sementes.service.RegioesAdaptacaoCultivoService;
import br.edu.ufape.lmts.sementes.service.ResponsavelTecnicoService;
import br.edu.ufape.lmts.sementes.service.RetiradaUsuarioService;
import br.edu.ufape.lmts.sementes.service.SementePragaService;
import br.edu.ufape.lmts.sementes.service.SementesService;
import br.edu.ufape.lmts.sementes.service.TabelaBancoSementesService;
import br.edu.ufape.lmts.sementes.service.ToleranciaAdversidadesService;
import br.edu.ufape.lmts.sementes.service.TransacaoGenericaService;
import br.edu.ufape.lmts.sementes.service.UsoOcupacaoTerraService;
import br.edu.ufape.lmts.sementes.service.UsuarioServiceInterface;
import br.edu.ufape.lmts.sementes.service.infraestruturaHidricaService;
import br.edu.ufape.lmts.sementes.service.sementeDoencaService;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class Facade {

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	// sementeDoenca--------------------------------------------------------------
	@Autowired
	private sementeDoencaService sementeDoencaService;

	public sementeDoenca savesementeDoenca(sementeDoenca newInstance) {
		return sementeDoencaService.savesementeDoenca(newInstance);
	}

	public sementeDoenca updatesementeDoenca(sementeDoenca transientObject) {
		return sementeDoencaService.updatesementeDoenca(transientObject);
	}

	public sementeDoenca findsementeDoencaById(long id) {
		return sementeDoencaService.findsementeDoencaById(id);
	}

	public List<sementeDoenca> getAllsementeDoenca() {
		return sementeDoencaService.getAllsementeDoenca();
	}

	public Page<sementeDoenca> findPageSementeDoenca(Pageable pageRequest) {
		return sementeDoencaService.findPagesementeDoenca(pageRequest);
	}

	public void deletesementeDoenca(sementeDoenca persistentObject) {
		sementeDoencaService.deletesementeDoenca(persistentObject);
	}

	public void deletesementeDoenca(long id) {
		sementeDoencaService.deletesementeDoenca(id);
	}

	// Usuario--------------------------------------------------------------
	@Autowired
	private UsuarioServiceInterface usuarioService;

	public Usuario saveUsuario(Usuario newInstance) {
		try {
			newInstance.setSenha(passwordEncoder.encode(newInstance.getSenha()));
			return usuarioService.saveUsuario(newInstance);
		} catch (Exception e) {
			throw new RuntimeException("Erro ao salvar o usuário", e);
		}

	}

	public Usuario updateUsuario(Usuario transientObject) {
		if(transientObject.getSenha() != null) {
			transientObject.setSenha(passwordEncoder.encode(transientObject.getSenha()));			
		} else {
			Usuario usuario = findUsuarioById(transientObject.getId());
			transientObject.setSenha(usuario.getSenha());
		}
		return usuarioService.updateUsuario(transientObject);
	}

	public Usuario findUsuarioById(long id) {
		return usuarioService.findUsuarioById(id);
	}
	
	public Usuario findUsuarioByEmail(String email) {
		return usuarioService.findUsuarioByEmail(email);
	}

	public List<Usuario> getAllUsuario() {
		return usuarioService.getAllUsuario();
	}

	public Page<Usuario> findPageUsuario(Pageable pageRequest) {
		return usuarioService.findPageUsuario(pageRequest);
	}

	public void deleteUsuario(Usuario persistentObject) {
		usuarioService.deleteUsuario(persistentObject);
	}

	public void deleteUsuario(long id) {
		usuarioService.deleteUsuario(id);
	}
	
	public Usuario findLoggedUser() {
		Usuario logged = findUsuarioByEmail(userDetailsServiceImpl.authenticated().getEmail());
		if(logged == null)
			throw new AuthenticationException("Usuário não autenticado");
		return logged;
	}

	// Coppabacs--------------------------------------------------------------
	@Autowired
	private CoppabacsService coppabacsService;

	public List<Coppabacs> getAllCoppabacs() {
		return coppabacsService.getAllCoppabacs();
	}

	public Coppabacs saveCoppabacs(Coppabacs newInstance) throws EmailExistsException {
		usuarioService.saveUsuario(newInstance);
		return coppabacsService.saveCoppabacs(newInstance);
	}

	public Coppabacs updateCoppabacs(Coppabacs transientObject) {
		return coppabacsService.updateCoppabacs(transientObject);
	}

	public Coppabacs findCoppabacsById(long id) {
		return coppabacsService.findCoppabacsById(id);
	}
	public Coppabacs findCoppabacsByEmail(String email) {
		return coppabacsService.findCoppabacsByEmail(email);
	}
	public Page<Coppabacs> findPageCoppabacs(Pageable pageRequest) {
		return coppabacsService.findPageCoppabacs(pageRequest);
	}

	public void deleteCoppabacs(Coppabacs coppabacs) {
		coppabacsService.deleteCoppabacs(coppabacs);
	}

	public void deleteCoppabacs(long id) {
		coppabacsService.deleteCoppabacs(id);
	}

	// SementePraga--------------------------------------------------------------
	@Autowired
	private SementePragaService sementePragaService;

	public SementePraga saveSementePraga(SementePraga newInstance) {
		return sementePragaService.saveSementePraga(newInstance);
	}

	public SementePraga updateSementePraga(SementePraga transientObject) {
		return sementePragaService.updateSementePraga(transientObject);
	}

	public SementePraga findSementePragaById(long id) {
		return sementePragaService.findSementePragaById(id);
	}

	public List<SementePraga> getAllSementePraga() {
		return sementePragaService.getAllSementePraga();
	}

	public Page<SementePraga> findPageSementePraga(Pageable pageRequest) {
		return sementePragaService.findPageSementePraga(pageRequest);
	}

	public void deleteSementePraga(SementePraga persistentObject) {
		sementePragaService.deleteSementePraga(persistentObject);
	}

	public void deleteSementePraga(long id) {
		sementePragaService.deleteSementePraga(id);
	}

	// Empalhamento--------------------------------------------------------------
	@Autowired
	private EmpalhamentoService empalhamentoService;

	public Empalhamento saveEmpalhamento(Empalhamento newInstance) {
		return empalhamentoService.saveEmpalhamento(newInstance);
	}

	public Empalhamento updateEmpalhamento(Empalhamento transientObject) {
		return empalhamentoService.updateEmpalhamento(transientObject);
	}

	public Empalhamento findEmpalhamentoById(long id) {
		return empalhamentoService.findEmpalhamentoById(id);
	}

	public List<Empalhamento> getAllEmpalhamento() {
		return empalhamentoService.getAllEmpalhamento();
	}

	public Page<Empalhamento> findPageEmpalhamento(Pageable pageRequest) {
		return empalhamentoService.findPageEmpalhamento(pageRequest);
	}

	public void deleteEmpalhamento(Empalhamento persistentObject) {
		empalhamentoService.deleteEmpalhamento(persistentObject);
	}

	public void deleteEmpalhamento(long id) {
		empalhamentoService.deleteEmpalhamento(id);
	}

	// InfraestruturaComunidade--------------------------------------------------------------
	@Autowired
	private InfraestruturaComunidadeService infraestruturaComunidadeService;

	public InfraestruturaComunidade saveInfraestruturaComunidade(InfraestruturaComunidade newInstance) {
		return infraestruturaComunidadeService.saveInfraestruturaComunidade(newInstance);
	}

	public InfraestruturaComunidade updateInfraestruturaComunidade(InfraestruturaComunidade transientObject) {
		return infraestruturaComunidadeService.updateInfraestruturaComunidade(transientObject);
	}

	public InfraestruturaComunidade findInfraestruturaComunidadeById(long id) {
		return infraestruturaComunidadeService.findInfraestruturaComunidadeById(id);
	}

	public List<InfraestruturaComunidade> getAllInfraestruturaComunidade() {
		return infraestruturaComunidadeService.getAllInfraestruturaComunidade();
	}

	public Page<InfraestruturaComunidade> findPageInfraestruturaComunidade(Pageable pageRequest) {
		return infraestruturaComunidadeService.findPageInfraestruturaComunidade(pageRequest);
	}

	public void deleteInfraestruturaComunidade(InfraestruturaComunidade persistentObject) {
		infraestruturaComunidadeService.deleteInfraestruturaComunidade(persistentObject);
	}

	public void deleteInfraestruturaComunidade(long id) {
		infraestruturaComunidadeService.deleteInfraestruturaComunidade(id);
	}

	// UsoOcupacaoTerra--------------------------------------------------------------
	@Autowired
	private UsoOcupacaoTerraService usoOcupacaoTerraService;

	public UsoOcupacaoTerra saveUsoOcupacaoTerra(UsoOcupacaoTerra newInstance) {
		return usoOcupacaoTerraService.saveUsoOcupacaoTerra(newInstance);
	}

	public UsoOcupacaoTerra updateUsoOcupacaoTerra(UsoOcupacaoTerra transientObject) {
		return usoOcupacaoTerraService.updateUsoOcupacaoTerra(transientObject);
	}

	public UsoOcupacaoTerra findUsoOcupacaoTerraById(long id) {
		return usoOcupacaoTerraService.findUsoOcupacaoTerraById(id);
	}

	public List<UsoOcupacaoTerra> getAllUsoOcupacaoTerra() {
		return usoOcupacaoTerraService.getAllUsoOcupacaoTerra();
	}

	public Page<UsoOcupacaoTerra> findPageUsoOcupacaoTerra(Pageable pageRequest) {
		return usoOcupacaoTerraService.findPageUsoOcupacaoTerra(pageRequest);
	}

	public void deleteUsoOcupacaoTerra(UsoOcupacaoTerra persistentObject) {
		usoOcupacaoTerraService.deleteUsoOcupacaoTerra(persistentObject);
	}

	public void deleteUsoOcupacaoTerra(long id) {
		usoOcupacaoTerraService.deleteUsoOcupacaoTerra(id);
	}

	// BancoSementes--------------------------------------------------------------
	@Autowired
	private BancoSementesServiceInterface bancoSementesService;

	public BancoSementes saveBancoSementes(BancoSementes newInstance) {
		return bancoSementesService.saveBancoSementes(newInstance);
	}

	public BancoSementes updateBancoSementes(BancoSementes transientObject) {
		return bancoSementesService.updateBancoSementes(transientObject);
	}

	public BancoSementes findBancoSementesById(long id) {
		return bancoSementesService.findBancoSementesById(id);
	}

	public List<BancoSementes> getAllBancoSementes() {
		return bancoSementesService.getAllBancoSementes();
	}

	public Page<BancoSementes> findPageBancoSementes(Pageable pageRequest) {
		return bancoSementesService.findPageBancoSementes(pageRequest);
	}

	public void deleteBancoSementes(BancoSementes persistentObject) {
		bancoSementesService.deleteBancoSementes(persistentObject);
	}

	public void deleteBancoSementes(long id) {
		bancoSementesService.deleteBancoSementes(id);
	}

	public List<Agricultor> getAllAgricultor(long id) {

		try {
			BancoSementes banco = bancoSementesService.findBancoSementesById(id);
			return banco.getAgricultores().stream().filter(x -> x.isAtivo()).toList();
		} catch (Exception e) {
			return null;
		}
	}

	public BancoSementes adicionarGerenteBancoSemente(long bancoId, long gerenteId) {
		BancoSementes banco = bancoSementesService.findBancoSementesById(bancoId);
		Gerente gerente = gerenteService.findGerenteById(gerenteId);
		banco.adicionarGerente(gerente);
		return bancoSementesService.saveBancoSementes(banco);
	}

	public void removerGerenteBancoSemente(long bancoId, long gerenteId) {
		BancoSementes banco = bancoSementesService.findBancoSementesById(bancoId);

		Gerente gerenteRemover = banco.getGerentes().stream().filter(gerente -> gerente.getId() == gerenteId)
				.findFirst().orElse(null);

//	    if(gerenteRemover != null) {
//	    	banco.getGerentes().remove(gerenteRemover);
//	    }
//    	gerenteService.deleteGerente(gerenteRemover);

		bancoSementesService.saveBancoSementes(banco);
	}

	// RetiradaUsuario--------------------------------------------------------------
	@Autowired
	private RetiradaUsuarioService retiradaUsuarioService;

	public RetiradaUsuario saveRetiradaUsuario(RetiradaUsuario newInstance) {
		try {
			Agricultor agricultor = findAgricultorById(newInstance.getAgricultor().getId());
			validateAndProcessItens(newInstance.getItens(), false, agricultor);
			RetiradaUsuario retiradaUsuario = retiradaUsuarioService.saveRetiradaUsuario(newInstance);
			BancoSementes bancoSementes = findBancoSementesById(retiradaUsuario.getBancoSementes().getId());
			bancoSementes.addRetiradaUsuario(retiradaUsuario);
			updateBancoSementes(bancoSementes);

			return retiradaUsuario;
		} catch (DataIntegrityViolationException e) {
			throw new CustomDatabaseException("Erro ao salvar retirada de usuário", e);
		}
	}

	public RetiradaUsuario updateRetiradaUsuario(RetiradaUsuario transientObject) {
		return retiradaUsuarioService.updateRetiradaUsuario(transientObject);
	}

	public RetiradaUsuario findRetiradaUsuarioById(long id) {
		return retiradaUsuarioService.findRetiradaUsuarioById(id);
	}

	public List<RetiradaUsuario> getAllRetiradaUsuario() {
		return retiradaUsuarioService.getAllRetiradaUsuario();
	}

	public Page<RetiradaUsuario> findPageRetiradaUsuario(Pageable pageRequest) {
		return retiradaUsuarioService.findPageRetiradaUsuario(pageRequest);
	}

	public void deleteRetiradaUsuario(RetiradaUsuario persistentObject) {
		retiradaUsuarioService.deleteRetiradaUsuario(persistentObject);
	}

	public void deleteRetiradaUsuario(long id) {
		retiradaUsuarioService.deleteRetiradaUsuario(id);
	}

	// TabelaBancoSementes--------------------------------------------------------------
	@Autowired
	private TabelaBancoSementesService tabelaBancoSementesService;

	@Transactional
	public TabelaBancoSementes saveTabelaBancoSementes(TabelaBancoSementes newInstance, long sementeId) {
		TabelaBancoSementes tabelaBancoSementes = tabelaBancoSementesService.saveTabelaBancoSementes(newInstance);
		Sementes sementes = findSementesById(sementeId);
		sementes.addTabelaSementes(tabelaBancoSementes);
		return tabelaBancoSementes;
	}

	@Transactional
	public List<TabelaBancoSementes> saveAllTabelaBancoSementes(List<TabelaBancoSementesRequest> requests) {
		return requests.stream()
				.map(request -> {
					TabelaBancoSementes tabelaBancoSementes = request.convertToEntity();
					long sementeId = request.getSementeId();
					return saveTabelaBancoSementes(tabelaBancoSementes, sementeId);
				})
				.collect(Collectors.toList());
	}

	public TabelaBancoSementes updateTabelaBancoSementes(TabelaBancoSementes transientObject) {
		return tabelaBancoSementesService.updateTabelaBancoSementes(transientObject);
	}

	public TabelaBancoSementes findTabelaBancoSementesById(long id) {
		return tabelaBancoSementesService.findTabelaBancoSementesById(id);
	}

	public List<TabelaBancoSementes> getAllTabelaBancoSementes() {
		return tabelaBancoSementesService.getAllTabelaBancoSementes();
	}

	public Page<TabelaBancoSementes> findPageTabelaBancoSementes(Pageable pageRequest) {
		return tabelaBancoSementesService.findPageTabelaBancoSementes(pageRequest);
	}

	public void deleteTabelaBancoSementes(TabelaBancoSementes persistentObject) {
		tabelaBancoSementesService.deleteTabelaBancoSementes(persistentObject);
	}

	public void deleteTabelaBancoSementes(long id) {
		tabelaBancoSementesService.deleteTabelaBancoSementes(id);
	}

	// Item--------------------------------------------------------------
	@Autowired
	private ItemService itemService;

	private void validateAndProcessItens(List<Item> itens, boolean isDoacao, Agricultor agricultor ) {
		List<Item> itensComErro = itens.stream()
				.filter(item -> !updateItemAndTabelaBancoSementes(item, isDoacao, agricultor))
				.toList();

		if (!itensComErro.isEmpty()) {
			throw new InvalidItemStateException("Itens com erro: " + itensComErro);
		}
	}

	private boolean updateItemAndTabelaBancoSementes(Item item, boolean isDoacao, Agricultor agricultor) {
		TabelaBancoSementes tabelaBancoSementes = findTabelaBancoSementesById(item.getTabelaBancoSementes().getId());
		Sementes sementes = findSementesById(item.getSementes().getId());
		if (tabelaBancoSementes != null) {
			double newPeso = isDoacao ? tabelaBancoSementes.getPeso() + item.getPeso() : tabelaBancoSementes.getPeso() - item.getPeso();
			if (newPeso < 0) {
				return false;
			}
			try {
				if(!isDoacao){
					if(!agricultor.getSementes().contains(sementes)) {
                        agricultor.addSementes(sementes);
						updateAgricultor(agricultor);
                    }
				}
				tabelaBancoSementes.setPeso(newPeso);
				tabelaBancoSementesService.saveTabelaBancoSementes(tabelaBancoSementes);

				return true;
			} catch (Exception e) {
				return false;
			}
		}
		return false;
	}

	public Item saveItem(Item newInstance) {
		return itemService.saveItem(newInstance);
	}

	public Item updateItem(Item transientObject) {
		return itemService.updateItem(transientObject);
	}

	public Item findItemById(long id) {
		return itemService.findItemById(id);
	}

	public List<Item> getAllItem() {
		return itemService.getAllItem();
	}

	public Page<Item> findPageItem(Pageable pageRequest) {
		return itemService.findPageItem(pageRequest);
	}

	public void deleteItem(Item persistentObject) {
		itemService.deleteItem(persistentObject);
	}

	public void deleteItem(long id) {
		itemService.deleteItem(id);
	}

	// Gerente--------------------------------------------------------------
	@Autowired
	private GerenteServiceInterface gerenteService;

	public Gerente saveGerente(Gerente newInstance) throws EmailExistsException {

		bancoSementesService.findBancoSementesById(newInstance.getBancoSementes().getId());

		usuarioService.saveUsuario(newInstance);

		return gerenteService.saveGerente(newInstance);
	}

	public Gerente updateGerente(Gerente transientObject) {
		usuarioService.updateUsuario(transientObject);
		return gerenteService.updateGerente(transientObject);
	}

	public Gerente findGerenteById(long id) {
		return gerenteService.findGerenteById(id);
	}
	public Gerente findGerenteByEmail(String email) {
		return gerenteService.findGerenteByEmail(email);
	}
	public List<Gerente> getAllGerente() {
		return gerenteService.getAllGerente();
	}

	public Page<Gerente> findPageGerente(Pageable pageRequest) {
		return gerenteService.findPageGerente(pageRequest);
	}

	public void deleteGerente(Gerente persistentObject) {
		gerenteService.deleteGerente(persistentObject);
	}

	public void deleteGerente(long id) {
		gerenteService.deleteGerente(id);
	}

	// ObjetosBancoSementes--------------------------------------------------------------
//	@Autowired
//	private ObjetosBancoSementesService  objetosBancoSementesService;
//
//	public ObjetosBancoSementes saveObjetosBancoSementes(ObjetosBancoSementes newInstance) {
//		return objetosBancoSementesService.saveObjetosBancoSementes(newInstance);
//	}
//
//	public ObjetosBancoSementes updateObjetosBancoSementes(ObjetosBancoSementes transientObject) {
//		return objetosBancoSementesService.updateObjetosBancoSementes(transientObject);
//	}
//
//	public ObjetosBancoSementes findObjetosBancoSementesById(long id) {
//		return objetosBancoSementesService.findObjetosBancoSementesById(id);
//	}
//
//	public List<ObjetosBancoSementes> getAllObjetosBancoSementes() {
//		return objetosBancoSementesService.getAllObjetosBancoSementes();
//	}
//
//	public void deleteObjetosBancoSementes(ObjetosBancoSementes persistentObject) {
//		objetosBancoSementesService.deleteObjetosBancoSementes(persistentObject);
//	}
//
//	public void deleteObjetosBancoSementes(long id) {
//		objetosBancoSementesService.deleteObjetosBancoSementes(id);
//	}

	// Cultura--------------------------------------------------------------
	@Autowired
	private CulturaService culturaService;

	public Cultura saveCultura(Cultura newInstance) {
		return culturaService.saveCultura(newInstance);
	}

	public Cultura updateCultura(Cultura transientObject) {
		return culturaService.updateCultura(transientObject);
	}

	public Cultura findCulturaById(long id) {
		return culturaService.findCulturaById(id);
	}

	public Cultura findCulturaByCultura(String cultura) {
		return culturaService.findCulturaByCultura(cultura);
	}

	public List<Cultura> getAllCultura() {
		return culturaService.getAllCultura();
	}

	public Page<Cultura> findPageCultura(Pageable pageRequest) {
		return culturaService.findPageCultura(pageRequest);
	}

	public void deleteCultura(Cultura persistentObject) {
		culturaService.deleteCultura(persistentObject);
	}

	public void deleteCultura(long id) {
		culturaService.deleteCultura(id);
	}

	// Conjuge--------------------------------------------------------------
	@Autowired
	private ConjugeService conjugeService;

	public Conjuge saveConjuge(Conjuge newInstance) {
		return conjugeService.saveConjuge(newInstance);
	}

	public Conjuge updateConjuge(Conjuge transientObject) {
		return conjugeService.updateConjuge(transientObject);
	}

	public Conjuge findConjugeById(long id) {
		return conjugeService.findConjugeById(id);
	}

	public List<Conjuge> getAllConjuge() {
		return conjugeService.getAllConjuge();
	}

	public Page<Conjuge> findPageConjuge(Pageable pageRequest) {
		return conjugeService.findPageConjuge(pageRequest);
	}

	public void deleteConjuge(Conjuge persistentObject) {
		conjugeService.deleteConjuge(persistentObject);
	}

	public void deleteConjuge(long id) {
		conjugeService.deleteConjuge(id);
	}

	// TransacaoGenerica--------------------------------------------------------------
	@Autowired
	private TransacaoGenericaService transacaoGenericaService;

	public TransacaoGenerica saveTransacaoGenerica(TransacaoGenerica transacao) {
		if (transacao.getItens() == null || transacao.getTabelaBancoSementes() == null) {
			throw new IllegalArgumentException("Informações da transação incompletas.");
		}

		transacao.getItens().forEach(item -> {
			TabelaBancoSementes origem = findTabelaBancoSementesById(item.getTabelaBancoSementes().getId()) ;
			TabelaBancoSementes destino = findTabelaBancoSementesById(transacao.getTabelaBancoSementes().getId());
			if (!origem.equals(destino)) {
				double peso = item.getPeso();
				origem.setPeso(origem.getPeso() - peso);
				destino.setPeso(destino.getPeso() + peso);

				if (origem.getPeso() < peso) {
					throw new IllegalArgumentException("Peso insuficiente na tabela de origem para transferir " + peso + " unidades.");
				}

				tabelaBancoSementesService.saveTabelaBancoSementes(origem);
				destino = tabelaBancoSementesService.saveTabelaBancoSementes(destino);

				item.setTabelaBancoSementes(destino);
			}
		});

		TransacaoGenerica transacaoGenerica = transacaoGenericaService.saveTransacaoGenerica(transacao);
		BancoSementes bancoSementes = findBancoSementesById(transacao.getBancoSementes().getId());
		bancoSementes.addTransacaoGenerica(transacaoGenerica);
		updateBancoSementes(bancoSementes);
		return transacaoGenerica;
	}

	public TransacaoGenerica updateTransacaoGenerica(TransacaoGenerica transientObject) {
		return transacaoGenericaService.updateTransacaoGenerica(transientObject);
	}

	public TransacaoGenerica findTransacaoGenericaById(long id) {
		return transacaoGenericaService.findTransacaoGenericaById(id);
	}

	public List<TransacaoGenerica> getAllTransacaoGenerica() {
		return transacaoGenericaService.getAllTransacaoGenerica();
	}

	public Page<TransacaoGenerica> findPageTransacaoGenerica(Pageable pageRequest) {
		return transacaoGenericaService.findPageTransacaoGenerica(pageRequest);
	}

	public void deleteTransacaoGenerica(TransacaoGenerica persistentObject) {
		transacaoGenericaService.deleteTransacaoGenerica(persistentObject);
	}

	public void deleteTransacaoGenerica(long id) {
		transacaoGenericaService.deleteTransacaoGenerica(id);
	}

	// Post--------------------------------------------------------------
	@Autowired
	private PostServiceInterface postService;

	public Post savePost(Post post) {
		Usuario autor = findLoggedUser();
		if(!(autor.getRoles().contains(TipoUsuario.COPPABACS)
				|| autor.getRoles().contains(TipoUsuario.ADMIN))) {
			throw new AuthorizationException("Usuário não autorizado.");
		}
		post.setAutor(autor);
		Post saved = postService.savePost(post);
		autor.addPost(saved);
		usuarioService.updateUsuario(autor);
		return saved;
	}


	public Post updatePost(Post transientObject) {
		Usuario logged  = findLoggedUser();
		if(!logged.equals(transientObject.getAutor()))
			throw new AuthorizationException("Usuário não autorizado.");
		return postService.updatePost(transientObject);
	}

	public Post findPostById(long id) {
		return postService.findPostById(id);
	}

	public List<Post> getAllPost() {
		return postService.getAllPost();
	}

	public Page<Post> findPagePost(Pageable pageRequest) {
		return postService.findPagePost(pageRequest);
	}

	public Post findVisiblePostById(long id) {
		return postService.findVisiblePostById(id);
	}

	public List<Post> getVisiblePost() {
		return postService.getVisiblePost();
	}

	public Page<Post> findPageVisiblePost(Pageable pageRequest) {
		return postService.findPageVisiblePost(pageRequest);
	}
	
	public void deletePost(Post persistentObject) {
		Usuario logged  = findLoggedUser();
		if(!logged.equals(persistentObject.getAutor()))
			throw new AuthorizationException("Usuário não autorizado.");
		persistentObject.getAutor().removePost(persistentObject);
		usuarioService.updateUsuario(persistentObject.getAutor());
		postService.deletePost(persistentObject);
	}

	public void deletePost(long id) {
		Post persistentObject = findPostById(id);
		Usuario logged  = findLoggedUser();
		if(!logged.equals(persistentObject.getAutor()))
			throw new AuthorizationException("Usuário não autorizado.");
		persistentObject.getAutor().removePost(persistentObject);
		usuarioService.updateUsuario(persistentObject.getAutor());
		postService.deletePost(id);
	}

	// Sementes--------------------------------------------------------------
	@Autowired
	private SementesService sementesService;

	public Sementes saveSementes(Sementes newInstance) {
		saveResponsavelTecnicoToSementes(newInstance);
		newInstance.setFinalidades(newInstance.getFinalidades().stream().map(x -> saveFinalidade(x)).toList());
		newInstance.setCultura(saveCultura(newInstance.getCultura()));
		return sementesService.saveSementes(newInstance);
	}

	private void saveResponsavelTecnicoToSementes(Sementes sementes) {
		try {
			String cpf = sementes.getResponsavelTecnico().getCpf();
			ResponsavelTecnico responsavelTecnico;
			responsavelTecnico = findResponsavelTecnicoByCpf(cpf);
			sementes.setResponsavelTecnico(responsavelTecnico);
		} catch (ObjectNotFoundException e) {
			sementes.setResponsavelTecnico(saveResponsavelTecnico(sementes.getResponsavelTecnico()));
		}
	}

	public Sementes updateSementes(Sementes transientObject) {
		saveResponsavelTecnicoToSementes(transientObject);
		transientObject.setFinalidades(transientObject.getFinalidades().stream().map(x -> saveFinalidade(x)).toList());
		// transientObject.setCultura(saveCultura(transientObject.getCultura()));
		System.out.println(transientObject.getCultura());
		System.out.println(transientObject);
		return sementesService.updateSementes(transientObject);

	}

	public Sementes findSementesById(long id) {
		return sementesService.findSementesById(id);
	}

	public List<Sementes> findSementesByResponsavelTecnico(long responsavelTecnicoId) {
		return sementesService.findSementesByResponsavelTecnico(findResponsavelTecnicoById(responsavelTecnicoId));
	}

	public List<Sementes> getAllSementes() {
		return sementesService.getAllSementes();
	}

	public List<Sementes> getAllSementesByBanco(long id) {
		BancoSementes banco = findBancoSementesById(id);
		return sementesService.getAllSementesByBanco(banco);
	}

	public Page<Sementes> findPageSementes(Pageable pageRequest) {
		return sementesService.findPageSementes(pageRequest);
	}

	public void deleteSementes(Sementes persistentObject) {
		sementesService.deleteSementes(persistentObject);
	}

	public void deleteSementes(long id) {
		sementesService.deleteSementes(id);
	}

	public List<Sementes> searchSementes(String string) {
		return sementesService.searchSementes(string);
	}

	public Page<Sementes> searchPageSementes(String string, Pageable pageRequest) {
		return sementesService.searchPageSementes(string, pageRequest);
	}

	// ResponsavelTecnico--------------------------------------------------------------
	@Autowired
	private ResponsavelTecnicoService responsavelTecnicoService;

	public ResponsavelTecnico saveResponsavelTecnico(ResponsavelTecnico newInstance) {
		return responsavelTecnicoService.saveResponsavelTecnico(newInstance);
	}

	public ResponsavelTecnico updateResponsavelTecnico(ResponsavelTecnico transientObject) {
		return responsavelTecnicoService.updateResponsavelTecnico(transientObject);
	}

	public ResponsavelTecnico findResponsavelTecnicoById(long id) {
		return responsavelTecnicoService.findResponsavelTecnicoById(id);
	}

	public ResponsavelTecnico findResponsavelTecnicoByCpf(String cpf) {
		return responsavelTecnicoService.findResponsavelTecnicoByCpf(cpf);
	}

	public ResponsavelTecnico findResponsavelTecnicoBySementesId(long sementesId) {
		return findSementesById(sementesId).getResponsavelTecnico();
	}

	public List<ResponsavelTecnico> getAllResponsavelTecnico() {
		return responsavelTecnicoService.getAllResponsavelTecnico();
	}

	public Page<ResponsavelTecnico> findPageResponsavelTecnico(Pageable pageRequest) {
		return responsavelTecnicoService.findPageResponsavelTecnico(pageRequest);
	}

	public void deleteResponsavelTecnico(ResponsavelTecnico persistentObject) {
		responsavelTecnicoService.deleteResponsavelTecnico(persistentObject);
	}

	public void deleteResponsavelTecnico(long id) {
		responsavelTecnicoService.deleteResponsavelTecnico(id);
	}

	// RegioesAdaptacaoCultivo--------------------------------------------------------------
	@Autowired
	private RegioesAdaptacaoCultivoService regioesAdaptacaoCultivoService;

	public RegioesAdaptacaoCultivo saveRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo newInstance) {
		return regioesAdaptacaoCultivoService.saveRegioesAdaptacaoCultivo(newInstance);
	}

	public RegioesAdaptacaoCultivo updateRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo transientObject) {
		return regioesAdaptacaoCultivoService.updateRegioesAdaptacaoCultivo(transientObject);
	}

	public RegioesAdaptacaoCultivo findRegioesAdaptacaoCultivoById(long id) {
		return regioesAdaptacaoCultivoService.findRegioesAdaptacaoCultivoById(id);
	}

	public List<RegioesAdaptacaoCultivo> getAllRegioesAdaptacaoCultivo() {
		return regioesAdaptacaoCultivoService.getAllRegioesAdaptacaoCultivo();
	}

	public Page<RegioesAdaptacaoCultivo> findPageRegioesAdaptacaoCultivo(Pageable pageRequest) {
		return regioesAdaptacaoCultivoService.findPageRegioesAdaptacaoCultivo(pageRequest);
	}

	public void deleteRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo persistentObject) {
		regioesAdaptacaoCultivoService.deleteRegioesAdaptacaoCultivo(persistentObject);
	}

	public void deleteRegioesAdaptacaoCultivo(long id) {
		regioesAdaptacaoCultivoService.deleteRegioesAdaptacaoCultivo(id);
	}

	// Doenca--------------------------------------------------------------
	@Autowired
	private DoencaService doencaService;

	public Doenca saveDoenca(Doenca newInstance) {
		return doencaService.saveDoenca(newInstance);
	}

	public Doenca updateDoenca(Doenca transientObject) {
		return doencaService.updateDoenca(transientObject);
	}

	public Doenca findDoencaById(long id) {
		return doencaService.findDoencaById(id);
	}

	public List<Doenca> getAllDoenca() {
		return doencaService.getAllDoenca();
	}

	public Page<Doenca> findPageDoenca(Pageable pageRequest) {
		return doencaService.findPageDoenca(pageRequest);
	}

	public void deleteDoenca(Doenca persistentObject) {
		doencaService.deleteDoenca(persistentObject);
	}

	public void deleteDoenca(long id) {
		doencaService.deleteDoenca(id);
	}

	// ToleranciaAdversidades--------------------------------------------------------------
	@Autowired
	private ToleranciaAdversidadesService toleranciaAdversidadesService;

	public ToleranciaAdversidades saveToleranciaAdversidades(ToleranciaAdversidades newInstance) {
		return toleranciaAdversidadesService.saveToleranciaAdversidades(newInstance);
	}

	public ToleranciaAdversidades updateToleranciaAdversidades(ToleranciaAdversidades transientObject) {
		return toleranciaAdversidadesService.updateToleranciaAdversidades(transientObject);
	}

	public ToleranciaAdversidades findToleranciaAdversidadesById(long id) {
		return toleranciaAdversidadesService.findToleranciaAdversidadesById(id);
	}

	public List<ToleranciaAdversidades> getAllToleranciaAdversidades() {
		return toleranciaAdversidadesService.getAllToleranciaAdversidades();
	}

	public Page<ToleranciaAdversidades> findPageToleranciaAdversidades(Pageable pageRequest) {
		return toleranciaAdversidadesService.findPageToleranciaAdversidades(pageRequest);
	}

	public void deleteToleranciaAdversidades(ToleranciaAdversidades persistentObject) {
		toleranciaAdversidadesService.deleteToleranciaAdversidades(persistentObject);
	}

	public void deleteToleranciaAdversidades(long id) {
		toleranciaAdversidadesService.deleteToleranciaAdversidades(id);
	}

	// infraestruturaHidrica--------------------------------------------------------------
	@Autowired
	private infraestruturaHidricaService infraestruturaHidricaService;

	public infraestruturaHidrica saveinfraestruturaHidrica(infraestruturaHidrica newInstance) {
		return infraestruturaHidricaService.saveinfraestruturaHidrica(newInstance);
	}

	public infraestruturaHidrica updateinfraestruturaHidrica(infraestruturaHidrica transientObject) {
		return infraestruturaHidricaService.updateinfraestruturaHidrica(transientObject);
	}

	public infraestruturaHidrica findinfraestruturaHidricaById(long id) {
		return infraestruturaHidricaService.findinfraestruturaHidricaById(id);
	}

	public List<infraestruturaHidrica> getAllinfraestruturaHidrica() {
		return infraestruturaHidricaService.getAllinfraestruturaHidrica();
	}

	public Page<infraestruturaHidrica> findPageInfraestruturaHidrica(Pageable pageRequest) {
		return infraestruturaHidricaService.findPageInfraestruturaHidrica(pageRequest);
	}

	public void deleteinfraestruturaHidrica(infraestruturaHidrica persistentObject) {
		infraestruturaHidricaService.deleteinfraestruturaHidrica(persistentObject);
	}

	public void deleteinfraestruturaHidrica(long id) {
		infraestruturaHidricaService.deleteinfraestruturaHidrica(id);
	}

	// Admin--------------------------------------------------------------
	@Autowired
	private AdminService adminService;

	public Admin saveAdmin(Admin newInstance) throws EmailExistsException {
		usuarioService.saveUsuario(newInstance);
		return adminService.saveAdmin(newInstance);
	}

	public Admin updateAdmin(Admin oldObject) {
		return adminService.updateAdmin(oldObject);
	}

	public Admin findAdminById(Long id) {
		return adminService.findAdminById(id);
	}

	public List<Admin> getAllAdmin() {
		return adminService.getAllAdmin();
	}

	public Page<Admin> findPageAdmin(Pageable pageRequest) {
		return adminService.findPageAdmin(pageRequest);
	}

	public void deleteAdmin(Admin persistentObject) {
		adminService.deleteAdmin(persistentObject);
	}

	public void deleteAdmin(Long id) {
		adminService.deleteAdmin(id);
	}

	// Agricultor--------------------------------------------------------------
	@Autowired
	private AgricultorService agricultorService;
	
	private Agricultor saveAgricultorA(Agricultor newInstance) throws EmailExistsException {
		newInstance.setAtividadeRural(saveAtividadesRuraisFromAgricultor(newInstance.getAtividadeRural()));
		bancoSementesService.findBancoSementesById(newInstance.getBancoSementes().getId());
		usuarioService.saveUsuario(newInstance);
		return agricultorService.saveAgricultor(newInstance);
	}

	public Agricultor addSementeAgricultor(List<Sementes> sementes, long agricultorId){
		Agricultor agricultor = findAgricultorById(agricultorId);
		sementes.forEach(semente-> {
			Sementes sementeSalvo = findSementesById(semente.getId());
				if (!agricultor.getSementes().contains(sementeSalvo)) {
					agricultor.addSementes(sementeSalvo);
				}
			}
		);
		return updateAgricultor(agricultor);
	}

	public Agricultor removeSementeAgricultor(List<Sementes> sementes, long agricultorId){
		Agricultor agricultor = findAgricultorById(agricultorId);
		sementes.forEach(semente-> {
            agricultor.getSementes().remove(semente);
		}
		);
		return updateAgricultor(agricultor);
	}
	
	public Agricultor saveAgricultor(Agricultor newInstance) throws EmailExistsException {
		newInstance.addRole(TipoUsuario.AGRICULTOR);
		return saveAgricultorA(newInstance);
	}
	
	public Agricultor saveAgricultorUsuario(Agricultor newInstance) throws EmailExistsException {
		newInstance.addRole(TipoUsuario.USUARIO);
		return saveAgricultorA(newInstance);
	}

	public Agricultor updateAgricultor(Agricultor transientObject) {
		//transientObject.setAtividadeRural(saveAtividadesRuraisFromAgricultor(transientObject.getAtividadeRural()));
		//bancoSementesService.findBancoSementesById(transientObject.getBancoSementes().getId());
		return agricultorService.updateAgricultor(transientObject);
	}

	public Agricultor findAgricultorById(long id) {
		return agricultorService.findAgricultorById(id);
	}
	public Agricultor findAgricultorByEmail(String email) {
		return agricultorService.findAgricultorByEmail(email);
	}
	public List<Agricultor> getAllAgricultor() {
		return agricultorService.getAllByRole(TipoUsuario.AGRICULTOR);
	}
	
	public Page<Agricultor> findPageAgricultor(Pageable pageRequest) {
		return agricultorService.findPageAgricultor(pageRequest);
	}
	
	public List<Agricultor> getAllAgricultorUsuario() {
		return agricultorService.getAllByRole(TipoUsuario.USUARIO);
	}

	public void deleteAgricultor(Agricultor persistentObject) {
		agricultorService.deleteAgricultor(persistentObject);
	}

	public void deleteAgricultor(long id) {
		agricultorService.deleteAgricultor(id);
	}

	public void validateAgricultor(long id) {
		agricultorService.validateAgricultor(id);
	}

	// ProducaoSementes--------------------------------------------------------------
	@Autowired
	private ProducaoSementesService producaoSementesService;

	public ProducaoSementes saveProducaoSementes(ProducaoSementes newInstance) {
		findAgricultorById(newInstance.getAgricultor().getId());
		return producaoSementesService.saveProducaoSementes(newInstance);
	}

	public ProducaoSementes updateProducaoSementes(ProducaoSementes transientObject) {
		findAgricultorById(transientObject.getAgricultor().getId());
		return producaoSementesService.updateProducaoSementes(transientObject);
	}

	public ProducaoSementes findProducaoSementesById(long id) {
		return producaoSementesService.findProducaoSementesById(id);
	}

	public List<ProducaoSementes> getAllProducaoSementes() {
		return producaoSementesService.getAllProducaoSementes();
	}

	public Page<ProducaoSementes> findPageProducaoSementes(Pageable pageRequest) {
		return producaoSementesService.findPageProducaoSementes(pageRequest);
	}

	public void deleteProducaoSementes(ProducaoSementes persistentObject) {
		producaoSementesService.deleteProducaoSementes(persistentObject);
	}

	public void deleteProducaoSementes(long id) {
		producaoSementesService.deleteProducaoSementes(id);
	}

	// Endereco--------------------------------------------------------------
	@Autowired
	private EnderecoService enderecoService;

	public Endereco saveEndereco(Endereco newInstance) {
		return enderecoService.saveEndereco(newInstance);
	}

	public Endereco updateEndereco(Endereco transientObject) {
		return enderecoService.updateEndereco(transientObject);
	}

	public Endereco findEnderecoById(long id) {
		return enderecoService.findEnderecoById(id);
	}

	public List<Endereco> getAllEndereco() {
		return enderecoService.getAllEndereco();
	}

	public Page<Endereco> findPageEndereco(Pageable pageRequest) {
		return enderecoService.findPageEndereco(pageRequest);
	}

	public void deleteEndereco(Endereco persistentObject) {
		enderecoService.deleteEndereco(persistentObject);
	}

	public void deleteEndereco(long id) {
		enderecoService.deleteEndereco(id);
	}

	// DoacaoUsuario--------------------------------------------------------------
	@Autowired
	private DoacaoUsuarioService doacaoUsuarioService;

	public DoacaoUsuario saveDoacaoUsuario(DoacaoUsuario newInstance) {
		try {
			validateAndProcessItens(newInstance.getItens(), true, null);
			DoacaoUsuario doacaoUsuario =doacaoUsuarioService.saveDoacaoUsuario(newInstance);
			BancoSementes bancoSementes = findBancoSementesById(doacaoUsuario.getId());
			bancoSementes.addDoacaoUsuario(doacaoUsuario);
			updateBancoSementes(bancoSementes);
			return doacaoUsuario;
		} catch (DataIntegrityViolationException e) {
			throw new CustomDatabaseException("Erro ao salvar doação de usuário", e);
		}
	}

	public DoacaoUsuario updateDoacaoUsuario(DoacaoUsuario transientObject) {
		return doacaoUsuarioService.updateDoacaoUsuario(transientObject);
	}

	public DoacaoUsuario findDoacaoUsuarioById(long id) {
		return doacaoUsuarioService.findDoacaoUsuarioById(id);
	}

	public List<DoacaoUsuario> getAllDoacaoUsuario() {
		return doacaoUsuarioService.getAllDoacaoUsuario();
	}

	public Page<DoacaoUsuario> findPageDoacaoUsuario(Pageable pageRequest) {
		return doacaoUsuarioService.findPageDoacaoUsuario(pageRequest);
	}

	public void deleteDoacaoUsuario(DoacaoUsuario persistentObject) {
		doacaoUsuarioService.deleteDoacaoUsuario(persistentObject);
	}

	public void deleteDoacaoUsuario(long id) {
		doacaoUsuarioService.deleteDoacaoUsuario(id);
	}

	// CaracteristicasAgronomicas--------------------------------------------------------------
	@Autowired
	private CaracteristicasAgronomicasService caracteristicasAgronomicasService;

	public CaracteristicasAgronomicas saveCaracteristicasAgronomicas(CaracteristicasAgronomicas newInstance) {
		return caracteristicasAgronomicasService.saveCaracteristicasAgronomicas(newInstance);
	}

	public CaracteristicasAgronomicas updateCaracteristicasAgronomicas(CaracteristicasAgronomicas transientObject) {
		return caracteristicasAgronomicasService.updateCaracteristicasAgronomicas(transientObject);
	}

	public CaracteristicasAgronomicas findCaracteristicasAgronomicasById(long id) {
		return caracteristicasAgronomicasService.findCaracteristicasAgronomicasById(id);
	}

	public List<CaracteristicasAgronomicas> getAllCaracteristicasAgronomicas() {
		return caracteristicasAgronomicasService.getAllCaracteristicasAgronomicas();
	}

	public Page<CaracteristicasAgronomicas> findPageCaracteristicasAgronomicas(Pageable pageRequest) {
		return caracteristicasAgronomicasService.findPageCaracteristicasAgronomicas(pageRequest);
	}

	public void deleteCaracteristicasAgronomicas(CaracteristicasAgronomicas persistentObject) {
		caracteristicasAgronomicasService.deleteCaracteristicasAgronomicas(persistentObject);
	}

	public void deleteCaracteristicasAgronomicas(long id) {
		caracteristicasAgronomicasService.deleteCaracteristicasAgronomicas(id);
	}

	// AtividadeRural--------------------------------------------------------------
	@Autowired
	private AtividadeRuralService atividadeRuralService;

	public AtividadeRural saveAtividadeRural(AtividadeRural newInstance) {
		return atividadeRuralService.saveAtividadeRural(newInstance);
	}

	public List<AtividadeRural> saveAllAtividadeRural(List<AtividadeRural> newInstances) {
		return atividadeRuralService.saveAllAtividadeRural(newInstances);
	}

	public List<AtividadeRural> saveAtividadesRuraisFromAgricultor(List<AtividadeRural> atividades) {
		List<AtividadeRural> todasAtividades = getAllAtividadeRural();
		List<String> nomesAtividadesCadatradas = todasAtividades.stream().map(a -> a.getNome()).toList();
		List<String> nomesAtividades = atividades.stream().map(a -> a.getNome()).toList();
		List<AtividadeRural> atividadesNaoCadatradas = atividades.stream()
				.filter(a -> !nomesAtividadesCadatradas.contains(a.getNome())).toList();
		List<AtividadeRural> atividadesCadatradas = todasAtividades.stream()
				.filter(a -> nomesAtividades.contains(a.getNome())).toList();
		if (atividadesNaoCadatradas.isEmpty()) {
			return atividadesCadatradas;
		}
		atividades = saveAllAtividadeRural(atividadesNaoCadatradas);
		atividades.addAll(atividadesCadatradas);
		return atividades;
	}

	public AtividadeRural updateAtividadeRural(AtividadeRural transientObject) {
		return atividadeRuralService.updateAtividadeRural(transientObject);
	}

	public AtividadeRural findAtividadeRuralById(long id) {
		return atividadeRuralService.findAtividadeRuralById(id);
	}

	public List<AtividadeRural> getAllAtividadeRural() {
		return atividadeRuralService.getAllAtividadeRural();
	}

	public Page<AtividadeRural> findPageAtividadeRural(Pageable pageRequest) {
		return atividadeRuralService.findPageAtividadeRural(pageRequest);
	}

	public void deleteAtividadeRural(AtividadeRural persistentObject) {
		atividadeRuralService.deleteAtividadeRural(persistentObject);
	}

	public void deleteAtividadeRural(long id) {
		atividadeRuralService.deleteAtividadeRural(id);
	}

	// Finalidade--------------------------------------------------------------
	@Autowired
	private FinalidadeService finalidadeService;

	public Finalidade saveFinalidade(Finalidade newInstance) {
		return finalidadeService.saveFinalidade(newInstance);
	}

	public Finalidade updateFinalidade(Finalidade transientObject) {
		return finalidadeService.updateFinalidade(transientObject);
	}

	public Finalidade findFinalidadeById(long id) {
		return finalidadeService.findFinalidadeById(id);
	}

	public Finalidade findFinalidadeByNome(String nome) {
		return finalidadeService.findFinalidadeByNome(nome);
	}

	public List<Finalidade> getAllFinalidade() {
		return finalidadeService.getAllFinalidade();
	}

	public Page<Finalidade> findPageFinalidade(Pageable pageRequest) {
		return finalidadeService.findPageFinalidade(pageRequest);
	}

	public void deleteFinalidade(Finalidade persistentObject) {
		finalidadeService.deleteFinalidade(persistentObject);
	}

	public void deleteFinalidade(long id) {
		finalidadeService.deleteFinalidade(id);
	}

	// Arquivos
	@Autowired
	private FileService fileService;

	public File findFile(String fileName) {
		return fileService.findFile(fileName);
	}

	public String storeFile(InputStream file, String fileName) {
		Usuario logado = findLoggedUser();
		String fn = logado.getId() + "-" + System.currentTimeMillis() + "-" + fileName;
		return fileService.storeFile(file, fn.replace(" ", ""));
	}

	public void deleteFile(String fileName) {
		fileService.deleteFile(fileName);
	}

}
