package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Item;
import br.edu.ufape.lmts.sementes.repository.ItemRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class ItemService implements ItemServiceInterface {
	@Autowired
	private ItemRepository repository;

	public Item saveItem(Item newInstance) {
		return repository.save(newInstance);
	}

	public Item updateItem(Item transientObject) {
		return repository.save(transientObject);
	}

	public Item findItemById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Item with id = " + id));
	}

	public List<Item> getAllItem() {
		return repository.findAll();
	}

	public void deleteItem(Item persistentObject) {
		this.deleteItem(persistentObject.getId());

	}

	public void deleteItem(long id) {
		Item obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Item with id = " + id));
		repository.delete(obj);
	}

	public Page<Item> findPageItem(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}