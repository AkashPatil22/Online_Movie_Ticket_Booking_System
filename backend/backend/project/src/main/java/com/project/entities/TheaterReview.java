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
@Table(name="Theatre_Review")
public class TheaterReview 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int treview_id;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.ALL) 
	@JoinColumn(name = "theatre_id") // FK
	private Theaters theater ;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.ALL) 
	@JoinColumn(name = "user_id") // FK
	private User user ;
	
	@Column
	private String reviews;
	
	public int getTreview_id() {
		return treview_id;
	}
	public void setTreview_id(int treview_id) {
		this.treview_id = treview_id;
	}
	public Theaters getTheater() {
		return theater;
	}
	public void setTheater(Theaters theater) {
		this.theater = theater;
	}
	
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "TheaterReview [treview_id=" + treview_id + ", reviews=" + reviews + "]";
	}
	public TheaterReview(int treview_id, String reviews) {
		super();
		this.treview_id = treview_id;
		this.reviews = reviews;
	}
	public TheaterReview() {
		super();
	}
	public TheaterReview(Theaters theater, User user, String reviews) {
		super();
		this.theater = theater;
		this.user = user;
		this.reviews = reviews;
	}
	
	
}
