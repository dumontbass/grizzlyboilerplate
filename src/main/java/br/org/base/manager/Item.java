package br.org.base.manager;

import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;

import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 9/24/13
 * Time: 6:33 PM
 * To change this template use File | Settings | File Templates.
 */


public class Item implements Serializable{

    @Id
    @ObjectId
    private String id;
    private String nome;
    private String unMedida;
    private String limiteMinimo;
    private boolean processavel;
    private String codigoBarras;
    private String categoria;
    private float fatorCorrecao;
    private boolean fracionavel;
    private String descarte;

    private float quantidadeTotal;
    private float valorTotal;





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

    public String getUnMedida() {
        return unMedida;
    }

    public void setUnMedida(String unMedida) {
        this.unMedida = unMedida;
    }

    public String getLimiteMinimo() {
        return limiteMinimo;
    }

    public void setLimiteMinimo(String limiteMinimo) {
        this.limiteMinimo = limiteMinimo;
    }

    public boolean isProcessavel() {
        return processavel;
    }

    public void setProcessavel(boolean processavel) {
        this.processavel = processavel;
    }

    public String getCodigoBarras() {
        return codigoBarras;
    }

    public void setCodigoBarras(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public float getFatorCorrecao() {
        return fatorCorrecao;
    }

    public void setFatorCorrecao(float fatorCorrecao) {
        this.fatorCorrecao = fatorCorrecao;
    }

    public boolean isFracionavel() {
        return fracionavel;
    }

    public void setFracionavel(boolean fracionavel) {
        this.fracionavel = fracionavel;
    }

    public String getDescarte() {
        return descarte;
    }

    public void setDescarte(String descarte) {
        this.descarte = descarte;
    }

    public float getQuantidadeTotal() {
        return quantidadeTotal;
    }

    public void setQuantidadeTotal(float quantidadeTotal) {
        this.quantidadeTotal = quantidadeTotal;
    }

    public float getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(float valorTotal) {
        this.valorTotal = valorTotal;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (Float.compare(item.fatorCorrecao, fatorCorrecao) != 0) return false;
        if (fracionavel != item.fracionavel) return false;
        if (processavel != item.processavel) return false;
        if (quantidadeTotal != item.quantidadeTotal) return false;
        if (Float.compare(item.valorTotal, valorTotal) != 0) return false;
        if (categoria != null ? !categoria.equals(item.categoria) : item.categoria != null) return false;
        if (codigoBarras != null ? !codigoBarras.equals(item.codigoBarras) : item.codigoBarras != null) return false;
        if (descarte != null ? !descarte.equals(item.descarte) : item.descarte != null) return false;
        if (id != null ? !id.equals(item.id) : item.id != null) return false;
        if (limiteMinimo != null ? !limiteMinimo.equals(item.limiteMinimo) : item.limiteMinimo != null) return false;
        if (nome != null ? !nome.equals(item.nome) : item.nome != null) return false;
        if (unMedida != null ? !unMedida.equals(item.unMedida) : item.unMedida != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (unMedida != null ? unMedida.hashCode() : 0);
        result = 31 * result + (limiteMinimo != null ? limiteMinimo.hashCode() : 0);
        result = 31 * result + (processavel ? 1 : 0);
        result = 31 * result + (codigoBarras != null ? codigoBarras.hashCode() : 0);
        result = 31 * result + (categoria != null ? categoria.hashCode() : 0);
        result = 31 * result + (fatorCorrecao != +0.0f ? Float.floatToIntBits(fatorCorrecao) : 0);
        result = 31 * result + (fracionavel ? 1 : 0);
        result = 31 * result + (descarte != null ? descarte.hashCode() : 0);
        result = 31 * result + (quantidadeTotal!= +0.0f ? Float.floatToIntBits(valorTotal) : 0);
        result = 31 * result + (valorTotal != +0.0f ? Float.floatToIntBits(valorTotal) : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Item{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", unMedida='").append(unMedida).append('\'');
        sb.append(", limiteMinimo='").append(limiteMinimo).append('\'');
        sb.append(", processavel=").append(processavel);
        sb.append(", codigoBarras='").append(codigoBarras).append('\'');
        sb.append(", categoria='").append(categoria).append('\'');
        sb.append(", fatorCorrecao=").append(fatorCorrecao);
        sb.append(", fracionavel=").append(fracionavel);
        sb.append(", descarte='").append(descarte).append('\'');
        sb.append(", quantidadeTotal=").append(quantidadeTotal);
        sb.append(", valorTotal=").append(valorTotal);
        sb.append('}');
        return sb.toString();
    }

}
