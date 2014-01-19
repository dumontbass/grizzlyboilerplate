package br.org.base.manager;

import org.joda.time.DateTime;

import java.io.Serializable;



public class Processado extends ItemCompra implements Serializable {



    private DateTime dataProcessamento;

    private DateTime novaValidade;

    //private String tipoProcessamento;
    private int quantidadeProcessada;
    private float projecaoPerda;
    private String local;
    private String novoNome;
    private int numPecas;
    private float pesoPorPeca;

    public DateTime getDataProcessamento() {
        return dataProcessamento;
    }

    public void setDataProcessamento(DateTime dataProcessamento) {
        this.dataProcessamento = dataProcessamento;
    }

    public DateTime getNovaValidade() {
        return novaValidade;
    }

    public void setNovaValidade(DateTime novaValidade) {
        this.novaValidade = novaValidade;
    }

    public int getQuantidadeProcessada() {
        return quantidadeProcessada;
    }

    public void setQuantidadeProcessada(int quantidadeProcessada) {
        this.quantidadeProcessada = quantidadeProcessada;
    }

    public float getProjecaoPerda() {
        return projecaoPerda;
    }

    public void setProjecaoPerda(float projecaoPerda) {
        this.projecaoPerda = projecaoPerda;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getNovoNome() {
        return novoNome;
    }

    public void setNovoNome(String novoNome) {
        this.novoNome = novoNome;
    }

    public int getNumPecas() {
        return numPecas;
    }

    public void setNumPecas(int numPecas) {
        this.numPecas = numPecas;
    }

    public float getPesoPorPeca() {
        return pesoPorPeca;
    }

    public void setPesoPorPeca(float pesoPorPeca) {
        this.pesoPorPeca = pesoPorPeca;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Processado that = (Processado) o;

        if (numPecas != that.numPecas) return false;
        if (Float.compare(that.pesoPorPeca, pesoPorPeca) != 0) return false;
        if (Float.compare(that.projecaoPerda, projecaoPerda) != 0) return false;
        if (quantidadeProcessada != that.quantidadeProcessada) return false;
        if (dataProcessamento != null ? !dataProcessamento.equals(that.dataProcessamento) : that.dataProcessamento != null)
            return false;
        if (local != null ? !local.equals(that.local) : that.local != null) return false;
        if (novoNome != null ? !novoNome.equals(that.novoNome) : that.novoNome != null) return false;



        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (dataProcessamento != null ? dataProcessamento.hashCode() : 0);

        result = 31 * result + quantidadeProcessada;
        result = 31 * result + (projecaoPerda != +0.0f ? Float.floatToIntBits(projecaoPerda) : 0);
        result = 31 * result + (local != null ? local.hashCode() : 0);
        result = 31 * result + (novoNome != null ? novoNome.hashCode() : 0);
        result = 31 * result + numPecas;
        result = 31 * result + (pesoPorPeca != +0.0f ? Float.floatToIntBits(pesoPorPeca) : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Processado{");
        sb.append("dataProcessamento=").append(dataProcessamento);

        sb.append(", quantidadeProcessada=").append(quantidadeProcessada);
        sb.append(", projecaoPerda=").append(projecaoPerda);
        sb.append(", local='").append(local).append('\'');
        sb.append(", novoNome='").append(novoNome).append('\'');
        sb.append(", numPecas=").append(numPecas);
        sb.append(", pesoPorPeca=").append(pesoPorPeca);
        sb.append('}');
        return sb.toString();
    }
}
