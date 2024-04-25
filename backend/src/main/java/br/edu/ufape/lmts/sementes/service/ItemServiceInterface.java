package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Item;

public interface ItemServiceInterface {
	Item saveItem(Item o);
	Item findItemById(long id);
	Item updateItem(Item u);
	void deleteItem(Item u);
	void deleteItem(long id);
	List<Item> getAllItem();
	Page<Item> findPageItem(Pageable pageRequest);
}