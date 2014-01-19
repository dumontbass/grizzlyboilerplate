package br.org.base.manager;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 10/3/13
 * Time: 1:30 AM
 * To change this template use File | Settings | File Templates.
 */
public class Fracionado extends Produto{

    private Item item;
    private String fracao;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Fracionado that = (Fracionado) o;

        if (fracao != null ? !fracao.equals(that.fracao) : that.fracao != null) return false;
        if (item != null ? !item.equals(that.item) : that.item != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (item != null ? item.hashCode() : 0);
        result = 31 * result + (fracao != null ? fracao.hashCode() : 0);
        return result;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public String getFracao() {
        return fracao;
    }

    public void setFracao(String fracao) {
        this.fracao = fracao;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Fracionado{");

        super.toString();

        sb.append("item=").append(item);
        sb.append(", fracao='").append(fracao).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
