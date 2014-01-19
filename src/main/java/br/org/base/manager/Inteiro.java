package br.org.base.manager;

import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 10/3/13
 * Time: 12:45 AM
 * To change this template use File | Settings | File Templates.
 */
public class Inteiro extends Produto implements Serializable {

    private Item item;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Inteiro inteiro = (Inteiro) o;

        if (item != null ? !item.equals(inteiro.item) : inteiro.item != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (item != null ? item.hashCode() : 0);
        return result;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }


    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Inteiro{");
        sb.append("item=").append(item);
        sb.append('}');
        return sb.toString();
    }
}
