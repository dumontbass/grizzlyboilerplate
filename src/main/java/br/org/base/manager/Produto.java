package br.org.base.manager;


import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;

import java.io.Serializable;


public class Produto implements Serializable {

	@Id
    @ObjectId
	protected String id;
    protected String nome;
    protected String imagem;
    protected String descricao;
    protected String opcionais;
    protected float valor;
    protected String categoria;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Produto produto = (Produto) o;

        if (Float.compare(produto.valor, valor) != 0) return false;
        if (categoria != null ? !categoria.equals(produto.categoria) : produto.categoria != null) return false;
        if (descricao != null ? !descricao.equals(produto.descricao) : produto.descricao != null) return false;
        if (id != null ? !id.equals(produto.id) : produto.id != null) return false;
        if (imagem != null ? !imagem.equals(produto.imagem) : produto.imagem != null) return false;
        if (nome != null ? !nome.equals(produto.nome) : produto.nome != null) return false;
        if (opcionais != null ? !opcionais.equals(produto.opcionais) : produto.opcionais != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (imagem != null ? imagem.hashCode() : 0);
        result = 31 * result + (descricao != null ? descricao.hashCode() : 0);
        result = 31 * result + (opcionais != null ? opcionais.hashCode() : 0);
        result = 31 * result + (valor != +0.0f ? Float.floatToIntBits(valor) : 0);
        result = 31 * result + (categoria != null ? categoria.hashCode() : 0);
        return result;
    }

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

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getOpcionais() {
        return opcionais;
    }

    public void setOpcionais(String opcionais) {
        this.opcionais = opcionais;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Produto{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", imagem='").append(imagem).append('\'');
        sb.append(", descricao='").append(descricao).append('\'');
        sb.append(", opcionais='").append(opcionais).append('\'');
        sb.append(", valor=").append(valor);
        sb.append(", categoria='").append(categoria).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
