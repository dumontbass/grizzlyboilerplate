package br.org.base.manager;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 10/3/13
 * Time: 1:31 AM
 * To change this template use File | Settings | File Templates.
 */
public class Composicao extends Produto{

    private List<ItemCompra> items;
    private int numPessoas;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Composicao that = (Composicao) o;

        if (numPessoas != that.numPessoas) return false;
        if (items != null ? !items.equals(that.items) : that.items != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (items != null ? items.hashCode() : 0);
        result = 31 * result + numPessoas;
        return result;
    }


    public List<ItemCompra> getItems() {
        return items;
    }

    public void setItems(List<ItemCompra> items) {
        this.items = items;
    }

    public int getNumPessoas() {
        return numPessoas;
    }

    public void setNumPessoas(int numPessoas) {
        this.numPessoas = numPessoas;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Composicao{");
        sb.append("items=").append(items);
        sb.append(", numPessoas=").append(numPessoas);
        sb.append('}');
        return sb.toString();
    }
}
