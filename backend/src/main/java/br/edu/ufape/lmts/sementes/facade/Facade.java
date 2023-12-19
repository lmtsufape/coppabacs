package br.edu.ufape.lmts.sementes.facade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.service.*;

@Service
public class Facade {
	//sementeDoenca--------------------------------------------------------------
	@Autowired
	private sementeDoencaService  sementeDoencaService;
		
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

	public void deletesementeDoenca(sementeDoenca persistentObject) {
		sementeDoencaService.deletesementeDoenca(persistentObject);
	}

	public void deletesementeDoenca(long id) {
		sementeDoencaService.deletesementeDoenca(id);
	}
	

	//Publicacao--------------------------------------------------------------
	@Autowired
	private PublicacaoService  publicacaoService;
		
	public Publicacao savePublicacao(Publicacao newInstance) {
		return publicacaoService.savePublicacao(newInstance);
	}

	public Publicacao updatePublicacao(Publicacao transientObject) {
		return publicacaoService.updatePublicacao(transientObject);
	}

	public Publicacao findPublicacaoById(long id) {
		return publicacaoService.findPublicacaoById(id);
	}

	public List<Publicacao> getAllPublicacao() {
		return publicacaoService.getAllPublicacao();
	}

	public void deletePublicacao(Publicacao persistentObject) {
		publicacaoService.deletePublicacao(persistentObject);
	}

	public void deletePublicacao(long id) {
		publicacaoService.deletePublicacao(id);
	}
	

	//Usuario--------------------------------------------------------------
	@Autowired
	private UsuarioService  usuarioService;
		
	public Usuario saveUsuario(Usuario newInstance) {
		return usuarioService.saveUsuario(newInstance);
	}

	public Usuario updateUsuario(Usuario transientObject) {
		return usuarioService.updateUsuario(transientObject);
	}

	public Usuario findUsuarioById(long id) {
		return usuarioService.findUsuarioById(id);
	}

	public List<Usuario> getAllUsuario() {
		return usuarioService.getAllUsuario();
	}

	public void deleteUsuario(Usuario persistentObject) {
		usuarioService.deleteUsuario(persistentObject);
	}

	public void deleteUsuario(long id) {
		usuarioService.deleteUsuario(id);
	}
	

	//Praga--------------------------------------------------------------
	@Autowired
	private PragaService  pragaService;
		
	public Praga savePraga(Praga newInstance) {
		return pragaService.savePraga(newInstance);
	}

	public Praga updatePraga(Praga transientObject) {
		return pragaService.updatePraga(transientObject);
	}

	public Praga findPragaById(long id) {
		return pragaService.findPragaById(id);
	}

	public List<Praga> getAllPraga() {
		return pragaService.getAllPraga();
	}

	public void deletePraga(Praga persistentObject) {
		pragaService.deletePraga(persistentObject);
	}

	public void deletePraga(long id) {
		pragaService.deletePraga(id);
	}
	

	//SementePraga--------------------------------------------------------------
	@Autowired
	private SementePragaService  sementePragaService;
		
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

	public void deleteSementePraga(SementePraga persistentObject) {
		sementePragaService.deleteSementePraga(persistentObject);
	}

	public void deleteSementePraga(long id) {
		sementePragaService.deleteSementePraga(id);
	}
	

	//Empalhamento--------------------------------------------------------------
	@Autowired
	private EmpalhamentoService  empalhamentoService;
		
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

	public void deleteEmpalhamento(Empalhamento persistentObject) {
		empalhamentoService.deleteEmpalhamento(persistentObject);
	}

	public void deleteEmpalhamento(long id) {
		empalhamentoService.deleteEmpalhamento(id);
	}
	

	//InfraestruturaComunidade--------------------------------------------------------------
	@Autowired
	private InfraestruturaComunidadeService  infraestruturaComunidadeService;
		
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

	public void deleteInfraestruturaComunidade(InfraestruturaComunidade persistentObject) {
		infraestruturaComunidadeService.deleteInfraestruturaComunidade(persistentObject);
	}

	public void deleteInfraestruturaComunidade(long id) {
		infraestruturaComunidadeService.deleteInfraestruturaComunidade(id);
	}
	

	//UsoOcupacaoTerra--------------------------------------------------------------
	@Autowired
	private UsoOcupacaoTerraService  usoOcupacaoTerraService;
		
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

	public void deleteUsoOcupacaoTerra(UsoOcupacaoTerra persistentObject) {
		usoOcupacaoTerraService.deleteUsoOcupacaoTerra(persistentObject);
	}

	public void deleteUsoOcupacaoTerra(long id) {
		usoOcupacaoTerraService.deleteUsoOcupacaoTerra(id);
	}
	

	//BancoSementes--------------------------------------------------------------
	@Autowired
	private BancoSementesService  bancoSementesService;
		
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

	public void deleteBancoSementes(BancoSementes persistentObject) {
		bancoSementesService.deleteBancoSementes(persistentObject);
	}

	public void deleteBancoSementes(long id) {
		bancoSementesService.deleteBancoSementes(id);
	}
	

	//RetiradaUsuario--------------------------------------------------------------
	@Autowired
	private RetiradaUsuarioService  retiradaUsuarioService;
		
	public RetiradaUsuario saveRetiradaUsuario(RetiradaUsuario newInstance) {
		return retiradaUsuarioService.saveRetiradaUsuario(newInstance);
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

	public void deleteRetiradaUsuario(RetiradaUsuario persistentObject) {
		retiradaUsuarioService.deleteRetiradaUsuario(persistentObject);
	}

	public void deleteRetiradaUsuario(long id) {
		retiradaUsuarioService.deleteRetiradaUsuario(id);
	}
	

	//TabelaBancoSementes--------------------------------------------------------------
	@Autowired
	private TabelaBancoSementesService  tabelaBancoSementesService;
		
	public TabelaBancoSementes saveTabelaBancoSementes(TabelaBancoSementes newInstance) {
		return tabelaBancoSementesService.saveTabelaBancoSementes(newInstance);
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

	public void deleteTabelaBancoSementes(TabelaBancoSementes persistentObject) {
		tabelaBancoSementesService.deleteTabelaBancoSementes(persistentObject);
	}

	public void deleteTabelaBancoSementes(long id) {
		tabelaBancoSementesService.deleteTabelaBancoSementes(id);
	}
	

	//Item--------------------------------------------------------------
	@Autowired
	private ItemService  itemService;
		
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

	public void deleteItem(Item persistentObject) {
		itemService.deleteItem(persistentObject);
	}

	public void deleteItem(long id) {
		itemService.deleteItem(id);
	}
	

	//Tecnico--------------------------------------------------------------
	@Autowired
	private TecnicoService  tecnicoService;
		
	public Gerente saveTecnico(Gerente newInstance) {
		return tecnicoService.saveTecnico(newInstance);
	}

	public Gerente updateTecnico(Gerente transientObject) {
		return tecnicoService.updateTecnico(transientObject);
	}

	public Gerente findTecnicoById(long id) {
		return tecnicoService.findTecnicoById(id);
	}

	public List<Gerente> getAllTecnico() {
		return tecnicoService.getAllTecnico();
	}

	public void deleteTecnico(Gerente persistentObject) {
		tecnicoService.deleteTecnico(persistentObject);
	}

	public void deleteTecnico(long id) {
		tecnicoService.deleteTecnico(id);
	}
	

	//ObjetosBancoSementes--------------------------------------------------------------
	@Autowired
	private ObjetosBancoSementesService  objetosBancoSementesService;
		
	public ObjetosBancoSementes saveObjetosBancoSementes(ObjetosBancoSementes newInstance) {
		return objetosBancoSementesService.saveObjetosBancoSementes(newInstance);
	}

	public ObjetosBancoSementes updateObjetosBancoSementes(ObjetosBancoSementes transientObject) {
		return objetosBancoSementesService.updateObjetosBancoSementes(transientObject);
	}

	public ObjetosBancoSementes findObjetosBancoSementesById(long id) {
		return objetosBancoSementesService.findObjetosBancoSementesById(id);
	}

	public List<ObjetosBancoSementes> getAllObjetosBancoSementes() {
		return objetosBancoSementesService.getAllObjetosBancoSementes();
	}

	public void deleteObjetosBancoSementes(ObjetosBancoSementes persistentObject) {
		objetosBancoSementesService.deleteObjetosBancoSementes(persistentObject);
	}

	public void deleteObjetosBancoSementes(long id) {
		objetosBancoSementesService.deleteObjetosBancoSementes(id);
	}
	

	//Evento--------------------------------------------------------------
	@Autowired
	private EventoService  eventoService;
		
	public Evento saveEvento(Evento newInstance) {
		return eventoService.saveEvento(newInstance);
	}

	public Evento updateEvento(Evento transientObject) {
		return eventoService.updateEvento(transientObject);
	}

	public Evento findEventoById(long id) {
		return eventoService.findEventoById(id);
	}

	public List<Evento> getAllEvento() {
		return eventoService.getAllEvento();
	}

	public void deleteEvento(Evento persistentObject) {
		eventoService.deleteEvento(persistentObject);
	}

	public void deleteEvento(long id) {
		eventoService.deleteEvento(id);
	}
	

	//Cultura--------------------------------------------------------------
	@Autowired
	private CulturaService  culturaService;
		
	public Cultura saveCultura(Cultura newInstance) {
		return culturaService.saveCultura(newInstance);
	}

	public Cultura updateCultura(Cultura transientObject) {
		return culturaService.updateCultura(transientObject);
	}

	public Cultura findCulturaById(long id) {
		return culturaService.findCulturaById(id);
	}

	public List<Cultura> getAllCultura() {
		return culturaService.getAllCultura();
	}

	public void deleteCultura(Cultura persistentObject) {
		culturaService.deleteCultura(persistentObject);
	}

	public void deleteCultura(long id) {
		culturaService.deleteCultura(id);
	}
	

	//Conjuge--------------------------------------------------------------
	@Autowired
	private ConjugeService  conjugeService;
		
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

	public void deleteConjuge(Conjuge persistentObject) {
		conjugeService.deleteConjuge(persistentObject);
	}

	public void deleteConjuge(long id) {
		conjugeService.deleteConjuge(id);
	}
	

	//TransacaoGenerica--------------------------------------------------------------
	@Autowired
	private TransacaoGenericaService  transacaoGenericaService;
		
	public TransacaoGenerica saveTransacaoGenerica(TransacaoGenerica newInstance) {
		return transacaoGenericaService.saveTransacaoGenerica(newInstance);
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

	public void deleteTransacaoGenerica(TransacaoGenerica persistentObject) {
		transacaoGenericaService.deleteTransacaoGenerica(persistentObject);
	}

	public void deleteTransacaoGenerica(long id) {
		transacaoGenericaService.deleteTransacaoGenerica(id);
	}
	

	//Postavel--------------------------------------------------------------
	@Autowired
	private PostavelService  postavelService;
		
	public Postavel savePostavel(Postavel newInstance) {
		return postavelService.savePostavel(newInstance);
	}

	public Postavel updatePostavel(Postavel transientObject) {
		return postavelService.updatePostavel(transientObject);
	}

	public Postavel findPostavelById(long id) {
		return postavelService.findPostavelById(id);
	}

	public List<Postavel> getAllPostavel() {
		return postavelService.getAllPostavel();
	}

	public void deletePostavel(Postavel persistentObject) {
		postavelService.deletePostavel(persistentObject);
	}

	public void deletePostavel(long id) {
		postavelService.deletePostavel(id);
	}
	

	//Sementes--------------------------------------------------------------
	@Autowired
	private SementesService  sementesService;
		
	public Sementes saveSementes(Sementes newInstance) {
		return sementesService.saveSementes(newInstance);
	}

	public Sementes updateSementes(Sementes transientObject) {
		return sementesService.updateSementes(transientObject);
	}

	public Sementes findSementesById(long id) {
		return sementesService.findSementesById(id);
	}

	public List<Sementes> getAllSementes() {
		return sementesService.getAllSementes();
	}

	public void deleteSementes(Sementes persistentObject) {
		sementesService.deleteSementes(persistentObject);
	}

	public void deleteSementes(long id) {
		sementesService.deleteSementes(id);
	}
	

	//RegioesAdaptacaoCultivo--------------------------------------------------------------
	@Autowired
	private RegioesAdaptacaoCultivoService  regioesAdaptacaoCultivoService;
		
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

	public void deleteRegioesAdaptacaoCultivo(RegioesAdaptacaoCultivo persistentObject) {
		regioesAdaptacaoCultivoService.deleteRegioesAdaptacaoCultivo(persistentObject);
	}

	public void deleteRegioesAdaptacaoCultivo(long id) {
		regioesAdaptacaoCultivoService.deleteRegioesAdaptacaoCultivo(id);
	}
	

	//Doenca--------------------------------------------------------------
	@Autowired
	private DoencaService  doencaService;
		
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

	public void deleteDoenca(Doenca persistentObject) {
		doencaService.deleteDoenca(persistentObject);
	}

	public void deleteDoenca(long id) {
		doencaService.deleteDoenca(id);
	}
	

	//Cor--------------------------------------------------------------
	@Autowired
	private CorService  corService;
		
	public Cor saveCor(Cor newInstance) {
		return corService.saveCor(newInstance);
	}

	public Cor updateCor(Cor transientObject) {
		return corService.updateCor(transientObject);
	}

	public Cor findCorById(long id) {
		return corService.findCorById(id);
	}

	public List<Cor> getAllCor() {
		return corService.getAllCor();
	}

	public void deleteCor(Cor persistentObject) {
		corService.deleteCor(persistentObject);
	}

	public void deleteCor(long id) {
		corService.deleteCor(id);
	}
	

	//ToleranciaAdversidades--------------------------------------------------------------
	@Autowired
	private ToleranciaAdversidadesService  toleranciaAdversidadesService;
		
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

	public void deleteToleranciaAdversidades(ToleranciaAdversidades persistentObject) {
		toleranciaAdversidadesService.deleteToleranciaAdversidades(persistentObject);
	}

	public void deleteToleranciaAdversidades(long id) {
		toleranciaAdversidadesService.deleteToleranciaAdversidades(id);
	}
	

	//infraestruturaHidrica--------------------------------------------------------------
	@Autowired
	private infraestruturaHidricaService  infraestruturaHidricaService;
		
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

	public void deleteinfraestruturaHidrica(infraestruturaHidrica persistentObject) {
		infraestruturaHidricaService.deleteinfraestruturaHidrica(persistentObject);
	}

	public void deleteinfraestruturaHidrica(long id) {
		infraestruturaHidricaService.deleteinfraestruturaHidrica(id);
	}
	

	//Admin--------------------------------------------------------------
	@Autowired
	private AdminService  adminService;
		
	public Coppabacs saveAdmin(Coppabacs newInstance) {
		return adminService.saveAdmin(newInstance);
	}

	public Coppabacs updateAdmin(Coppabacs transientObject) {
		return adminService.updateAdmin(transientObject);
	}

	public Coppabacs findAdminById(long id) {
		return adminService.findAdminById(id);
	}

	public List<Coppabacs> getAllAdmin() {
		return adminService.getAllAdmin();
	}

	public void deleteAdmin(Coppabacs persistentObject) {
		adminService.deleteAdmin(persistentObject);
	}

	public void deleteAdmin(long id) {
		adminService.deleteAdmin(id);
	}
	

	//Agricultor--------------------------------------------------------------
	@Autowired
	private AgricultorService  agricultorService;
		
	public Agricultor saveAgricultor(Agricultor newInstance) {
		return agricultorService.saveAgricultor(newInstance);
	}

	public Agricultor updateAgricultor(Agricultor transientObject) {
		return agricultorService.updateAgricultor(transientObject);
	}

	public Agricultor findAgricultorById(long id) {
		return agricultorService.findAgricultorById(id);
	}

	public List<Agricultor> getAllAgricultor() {
		return agricultorService.getAllAgricultor();
	}

	public void deleteAgricultor(Agricultor persistentObject) {
		agricultorService.deleteAgricultor(persistentObject);
	}

	public void deleteAgricultor(long id) {
		agricultorService.deleteAgricultor(id);
	}
	

	//ProducaoSementes--------------------------------------------------------------
	@Autowired
	private ProducaoSementesService  producaoSementesService;
		
	public ProducaoSementes saveProducaoSementes(ProducaoSementes newInstance) {
		return producaoSementesService.saveProducaoSementes(newInstance);
	}

	public ProducaoSementes updateProducaoSementes(ProducaoSementes transientObject) {
		return producaoSementesService.updateProducaoSementes(transientObject);
	}

	public ProducaoSementes findProducaoSementesById(long id) {
		return producaoSementesService.findProducaoSementesById(id);
	}

	public List<ProducaoSementes> getAllProducaoSementes() {
		return producaoSementesService.getAllProducaoSementes();
	}

	public void deleteProducaoSementes(ProducaoSementes persistentObject) {
		producaoSementesService.deleteProducaoSementes(persistentObject);
	}

	public void deleteProducaoSementes(long id) {
		producaoSementesService.deleteProducaoSementes(id);
	}
	

	//Endereco--------------------------------------------------------------
	@Autowired
	private EnderecoService  enderecoService;
		
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

	public void deleteEndereco(Endereco persistentObject) {
		enderecoService.deleteEndereco(persistentObject);
	}

	public void deleteEndereco(long id) {
		enderecoService.deleteEndereco(id);
	}
	

	//DoacaoUsuario--------------------------------------------------------------
	@Autowired
	private DoacaoUsuarioService  doacaoUsuarioService;
		
	public DoacaoUsuario saveDoacaoUsuario(DoacaoUsuario newInstance) {
		return doacaoUsuarioService.saveDoacaoUsuario(newInstance);
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

	public void deleteDoacaoUsuario(DoacaoUsuario persistentObject) {
		doacaoUsuarioService.deleteDoacaoUsuario(persistentObject);
	}

	public void deleteDoacaoUsuario(long id) {
		doacaoUsuarioService.deleteDoacaoUsuario(id);
	}
	

	//CaracteristicasAgronomicas--------------------------------------------------------------
	@Autowired
	private CaracteristicasAgronomicasService  caracteristicasAgronomicasService;
		
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

	public void deleteCaracteristicasAgronomicas(CaracteristicasAgronomicas persistentObject) {
		caracteristicasAgronomicasService.deleteCaracteristicasAgronomicas(persistentObject);
	}

	public void deleteCaracteristicasAgronomicas(long id) {
		caracteristicasAgronomicasService.deleteCaracteristicasAgronomicas(id);
	}
	

	//AtividadeRural--------------------------------------------------------------
	@Autowired
	private AtividadeRuralService  atividadeRuralService;
		
	public AtividadeRural saveAtividadeRural(AtividadeRural newInstance) {
		return atividadeRuralService.saveAtividadeRural(newInstance);
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

	public void deleteAtividadeRural(AtividadeRural persistentObject) {
		atividadeRuralService.deleteAtividadeRural(persistentObject);
	}

	public void deleteAtividadeRural(long id) {
		atividadeRuralService.deleteAtividadeRural(id);
	}
	

	//Finalidade--------------------------------------------------------------
	@Autowired
	private FinalidadeService  finalidadeService;
		
	public Finalidade saveFinalidade(Finalidade newInstance) {
		return finalidadeService.saveFinalidade(newInstance);
	}

	public Finalidade updateFinalidade(Finalidade transientObject) {
		return finalidadeService.updateFinalidade(transientObject);
	}

	public Finalidade findFinalidadeById(long id) {
		return finalidadeService.findFinalidadeById(id);
	}

	public List<Finalidade> getAllFinalidade() {
		return finalidadeService.getAllFinalidade();
	}

	public void deleteFinalidade(Finalidade persistentObject) {
		finalidadeService.deleteFinalidade(persistentObject);
	}

	public void deleteFinalidade(long id) {
		finalidadeService.deleteFinalidade(id);
	}
	

}