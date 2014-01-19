package br.org.base.manager;

import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;

import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 11/28/13
 * Time: 12:09 PM
 * To change this template use File | Settings | File Templates.
 */
public class Fornecedor implements Serializable
{
    @ObjectId
    @Id
    private String id;
    private String nome;
    private String cnpj;
    private Endereco endereco;
    private String telefone;
    private String nomeContato;
    private String emailContato;
    private String telefoneContato;
    private String celularContato;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getNomeContato() {
        return nomeContato;
    }

    public void setNomeContato(String nomeContato) {
        this.nomeContato = nomeContato;
    }

    public String getEmailContato() {
        return emailContato;
    }

    public void setEmailContato(String emailContato) {
        this.emailContato = emailContato;
    }

    public String getTelefoneContato() {
        return telefoneContato;
    }

    public void setTelefoneContato(String telefoneContato) {
        this.telefoneContato = telefoneContato;
    }

    public String getCelularContato() {
        return celularContato;
    }

    public void setCelularContato(String celularContato) {
        this.celularContato = celularContato;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Fornecedor that = (Fornecedor) o;

        if (celularContato != null ? !celularContato.equals(that.celularContato) : that.celularContato != null)
            return false;
        if (cnpj != null ? !cnpj.equals(that.cnpj) : that.cnpj != null) return false;
        if (emailContato != null ? !emailContato.equals(that.emailContato) : that.emailContato != null) return false;
        if (endereco != null ? !endereco.equals(that.endereco) : that.endereco != null) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (nome != null ? !nome.equals(that.nome) : that.nome != null) return false;
        if (nomeContato != null ? !nomeContato.equals(that.nomeContato) : that.nomeContato != null) return false;
        if (telefone != null ? !telefone.equals(that.telefone) : that.telefone != null) return false;
        if (telefoneContato != null ? !telefoneContato.equals(that.telefoneContato) : that.telefoneContato != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (cnpj != null ? cnpj.hashCode() : 0);
        result = 31 * result + (endereco != null ? endereco.hashCode() : 0);
        result = 31 * result + (telefone != null ? telefone.hashCode() : 0);
        result = 31 * result + (nomeContato != null ? nomeContato.hashCode() : 0);
        result = 31 * result + (emailContato != null ? emailContato.hashCode() : 0);
        result = 31 * result + (telefoneContato != null ? telefoneContato.hashCode() : 0);
        result = 31 * result + (celularContato != null ? celularContato.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Fornecedor{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", cnpj='").append(cnpj).append('\'');
        sb.append(", endereco=").append(endereco);
        sb.append(", telefone='").append(telefone).append('\'');
        sb.append(", nomeContato='").append(nomeContato).append('\'');
        sb.append(", emailContato='").append(emailContato).append('\'');
        sb.append(", telefoneContato='").append(telefoneContato).append('\'');
        sb.append(", celularContato='").append(celularContato).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
