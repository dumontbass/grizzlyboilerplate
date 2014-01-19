package br.org.base.manager;

import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;
import org.joda.time.DateTime;

import java.io.Serializable;
import java.util.List;



public abstract class Pessoa implements Serializable{
	
	@Id
    @ObjectId
	protected String id;
	
	protected String nome;

	protected String email;
	protected String sobrenome;
	protected String rg;
	protected String telefoneRes;
	protected String telefoneCel;
    private List<Dispositivo> dispositivos;

    private List<Endereco> enderecos;

    private DateTime nascimento;


    public List<Endereco> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(List<Endereco> enderecos) {
        this.enderecos = enderecos;
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



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getTelefoneRes() {
        return telefoneRes;
    }

    public void setTelefoneRes(String telefoneRes) {
        this.telefoneRes = telefoneRes;
    }

    public String getTelefoneCel() {
        return telefoneCel;
    }

    public void setTelefoneCel(String telefoneCel) {
        this.telefoneCel = telefoneCel;
    }

    public List<Dispositivo> getDispositivos() {
        return dispositivos;
    }

    public void setDispositivos(List<Dispositivo> dispositivos) {
        this.dispositivos = dispositivos;
    }

    public DateTime getNascimento() {
        return nascimento;
    }

    public void setNascimento(DateTime nascimento) {
        this.nascimento = nascimento;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Pessoa pessoa = (Pessoa) o;

        if (dispositivos != null ? !dispositivos.equals(pessoa.dispositivos) : pessoa.dispositivos != null)
            return false;
        if (email != null ? !email.equals(pessoa.email) : pessoa.email != null) return false;

        if (enderecos != null ? !enderecos.equals(pessoa.enderecos) : pessoa.enderecos != null) return false;
        if (id != null ? !id.equals(pessoa.id) : pessoa.id != null) return false;
        if (nascimento != null ? !nascimento.equals(pessoa.nascimento) : pessoa.nascimento != null) return false;
        if (nome != null ? !nome.equals(pessoa.nome) : pessoa.nome != null) return false;
        if (rg != null ? !rg.equals(pessoa.rg) : pessoa.rg != null) return false;
        if (sobrenome != null ? !sobrenome.equals(pessoa.sobrenome) : pessoa.sobrenome != null) return false;
        if (telefoneCel != null ? !telefoneCel.equals(pessoa.telefoneCel) : pessoa.telefoneCel != null) return false;
        if (telefoneRes != null ? !telefoneRes.equals(pessoa.telefoneRes) : pessoa.telefoneRes != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nome != null ? nome.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (sobrenome != null ? sobrenome.hashCode() : 0);
        result = 31 * result + (rg != null ? rg.hashCode() : 0);
        result = 31 * result + (telefoneRes != null ? telefoneRes.hashCode() : 0);
        result = 31 * result + (telefoneCel != null ? telefoneCel.hashCode() : 0);
        result = 31 * result + (dispositivos != null ? dispositivos.hashCode() : 0);
        result = 31 * result + (enderecos != null ? enderecos.hashCode() : 0);
        result = 31 * result + (nascimento != null ? nascimento.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Pessoa{");
        sb.append("id='").append(id).append('\'');
        sb.append(", nome='").append(nome).append('\'');
        sb.append(", email='").append(email).append('\'');
        sb.append(", sobrenome='").append(sobrenome).append('\'');
        sb.append(", rg='").append(rg).append('\'');
        sb.append(", telefoneRes='").append(telefoneRes).append('\'');
        sb.append(", telefoneCel='").append(telefoneCel).append('\'');
        sb.append(", dispositivos=").append(dispositivos);
        sb.append(", enderecos=").append(enderecos);
        sb.append(", nascimento=").append(nascimento);
        sb.append('}');
        return sb.toString();
    }
}
