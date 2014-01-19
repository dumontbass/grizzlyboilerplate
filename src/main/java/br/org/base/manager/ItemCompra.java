package br.org.base.manager;

import org.joda.time.DateTime;

import java.io.Serializable;



public class ItemCompra extends Item implements Serializable{

    private String localizacao;
    private String fornecedor;
    private DateTime validade;
    private float valor;
    private float valorPor;
    private float quantidade;
    private String lote;


    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(String fornecedor) {
        this.fornecedor = fornecedor;
    }

    public DateTime getValidade() {
        return validade;
    }

    public void setValidade(DateTime validade) {
        this.validade = validade;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public float getValorPor() {
        return valorPor;
    }

    public void setValorPor(float valorPor) {
        this.valorPor = valorPor;
    }

    public float getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(float quantidade) {
        this.quantidade = quantidade;
    }

    public String getLote() {
        return lote;
    }

    public void setLote(String lote) {
        this.lote = lote;
    }
}
