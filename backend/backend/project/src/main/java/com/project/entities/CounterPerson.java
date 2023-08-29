package com.project.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Counter_Person")
public class CounterPerson 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
    private int cp_id;
	
	@OneToOne(targetEntity = User.class,fetch = FetchType.EAGER ,cascade =CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user; //onetoOne
    
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "theatre_id") // FK
	private Theaters theater ;
  
    @Column
    private String counter_name;
    
//    @OneToMany(mappedBy = "counterperson", fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.REMOVE}) // FK field name
//	private List<Ticket> ticketList;
    
public int getCp_id() {
	return cp_id;
}
public void setCp_id(int cp_id) {
	this.cp_id = cp_id;
}
public String getCounter_name() {
	return counter_name;
}
public void setCounter_name(String counter_name) {
	this.counter_name = counter_name;
}

public Theaters getTheater() {
	return theater;
}
public void setTheater(Theaters theater) {
	this.theater = theater;
}

public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}


/*
 * public List<Ticket> getTicketList() { return ticketList; } public void
 * setTicketList(List<Ticket> ticketList) { this.ticketList = ticketList; }
 */
@Override
public String toString() {
	return "CounterPerson [cp_id=" + cp_id + ", user=" + user + ", theater=" + theater + ", counter_name="
			+ counter_name +  "]";
}
public CounterPerson( String counter_name,Theaters theater) {
	super();
	this.counter_name = counter_name;
	this.theater=theater;
	//this.ticketList=new ArrayList<Ticket>();
}

public CounterPerson( User user, Theaters theater, String counter_name) {
	super();
	this.user = user;
	this.theater = theater;
	this.counter_name = counter_name;
	//this.ticketList=new ArrayList<Ticket>();
}
public CounterPerson() {
	super();
	//this.ticketList=new ArrayList<Ticket>();
}

 
}
