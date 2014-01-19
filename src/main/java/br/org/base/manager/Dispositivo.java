package br.org.base.manager;


import net.vz.mongodb.jackson.Id;

public class Dispositivo {
	
	@Id
	public String id;
	public String nome;
	public boolean ativo;
	public String ip;

}
