package com.project.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Tickets")
public class Ticket 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int ticket_id;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "user_id") // FK
	private User user ;
	
	@OneToOne(targetEntity = Payment.class,fetch = FetchType.LAZY,cascade =CascadeType.ALL)
	@JoinColumn(name = "payment_id")
	private Payment payment; //onetoOne
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "mdetails_id") // FK
	private MovieDetails mdetails ;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "theatre_id") // FK
	private Theaters theater ;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "screen_id") // FK
	private Screen screen ;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "chair_status_id") // FK
	private ChairStatus chair ;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "cp_id") // FK
	private CounterPerson counterperson ;
	
	public int getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(int ticket_id) {
		this.ticket_id = ticket_id;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	public Theaters getTheater() {
		return theater;
	}
	public void setTheater(Theaters theater) {
		this.theater = theater;
	}
	
	public MovieDetails getMdetails() {
		return mdetails;
	}
	public void setMdetails(MovieDetails mdetails) {
		this.mdetails = mdetails;
	}
	public Screen getScreen() {
		return screen;
	}
	public void setScreen(Screen screen) {
		this.screen = screen;
	}
	
	public ChairStatus getChair() {
		return chair;
	}
	public void setChair(ChairStatus chair) {
		this.chair = chair;
	}
	
	
	
	@Override
	public String toString() {
		return "Ticket [ticket_id=" + ticket_id + ", user=" + user + ", payment=" + payment + ", mdetails=" + mdetails
				+ ", theater=" + theater + ", screen=" + screen + ", chair=" + chair + ", counterperson="
				+ counterperson + "]";
	}
	
	public Ticket(User user, Payment payment, MovieDetails mdetails,
			Theaters theater, Screen screen, ChairStatus chair, CounterPerson counterperson) {
		super();
		this.user = user;
		this.payment = payment;
		this.mdetails = mdetails;
		this.theater = theater;
		this.screen = screen;
		this.chair = chair;
		this.counterperson = counterperson;
	}
	public Ticket() {
		super();
	}
	
	
}
