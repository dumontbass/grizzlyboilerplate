package br.org.base.manager;

import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 11/19/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */
public class Cardapio implements Serializable{



    @Id
    @ObjectId
    private String id;
    private String nome;
    private List<Categoria> categorias = new ArrayList<Categoria>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Cardapio cardapio = (Cardapio) o;

        if (categorias != null ? !categorias.equals(cardapio.categorias) : cardapio.categorias != null) return false;
        if (id != null ? !id.equals(cardapio.id) : cardapio.id != null) return false;
        if (nome != null ? !nome.equals(cardapio.nome) : cardapio.nome != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (categorias != null ? categorias.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Cardapio{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", categorias=").append(categorias);
        sb.append('}');
        return sb.toString();
    }
}
