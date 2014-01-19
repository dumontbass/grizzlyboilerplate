package br.org.base.manager;

import org.joda.time.DateTime;

import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

public class Promocao {
	
	@Id
	public String id;
	public String nome;
	public float custo;
	public float precoVenda;
	public String descricao;
	public DateTime validade;
	
	@OneToMany
	public List<Produto> produtos;

}
