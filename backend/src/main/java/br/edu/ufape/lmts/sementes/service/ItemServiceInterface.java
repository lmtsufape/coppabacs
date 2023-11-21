package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Item;

public interface ItemServiceInterface {
	Item saveItem(Item o);
	Item findItemById(long id);
	Item updateItem(Item u);
	void deleteItem(Item u);
	void deleteItem(long id);
	List<Item> getAllItem();
    
    

    
}