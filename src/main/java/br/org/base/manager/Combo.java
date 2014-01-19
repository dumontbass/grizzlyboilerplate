package br.org.base.manager;


import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


public class Combo implements Serializable {

	@Id
    @ObjectId
	private String id;
    private String nome;
    private String imagem;
    private String descricao;
    private String opcionais;
    private float valor;
    private String categoria;
    private float quantidade;

    private List<ProdutoCombo> produtos = new ArrayList<ProdutoCombo>();


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Combo combo = (Combo) o;

        if (Float.compare(combo.quantidade, quantidade) != 0) return false;
        if (Float.compare(combo.valor, valor) != 0) return false;
        if (categoria != null ? !categoria.equals(combo.categoria) : combo.categoria != null) return false;
        if (descricao != null ? !descricao.equals(combo.descricao) : combo.descricao != null) return false;
        if (id != null ? !id.equals(combo.id) : combo.id != null) return false;
        if (imagem != null ? !imagem.equals(combo.imagem) : combo.imagem != null) return false;
        if (nome != null ? !nome.equals(combo.nome) : combo.nome != null) return false;
        if (opcionais != null ? !opcionais.equals(combo.opcionais) : combo.opcionais != null) return false;
        if (produtos != null ? !produtos.equals(combo.produtos) : combo.produtos != null) return false;

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
        result = 31 * result + (quantidade != +0.0f ? Float.floatToIntBits(quantidade) : 0);
        result = 31 * result + (produtos != null ? produtos.hashCode() : 0);
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

    public List<ProdutoCombo> getProdutos() {
        return produtos;
    }


    public float getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(float quantidade) {
        this.quantidade = quantidade;
    }

    public void setProdutos(List<ProdutoCombo> produtos) {
        this.produtos = produtos;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Combo{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", imagem='").append(imagem).append('\'');
        sb.append(", descricao='").append(descricao).append('\'');
        sb.append(", opcionais='").append(opcionais).append('\'');
        sb.append(", valor=").append(valor);
        sb.append(", categoria='").append(categoria).append('\'');
        sb.append(", quantidade=").append(quantidade);
        sb.append(", produtos=").append(produtos);
        sb.append('}');
        return sb.toString();
    }
}
