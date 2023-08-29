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
import javax.persistence.Table;

@Entity
@Table(name="Movie_Review_Rating")
public class MovieReviewRating 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int mrr_id;
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "movie_id") // FK 
	private Movies movie;
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL) 
	@JoinColumn(name = "user_id") // FK
	private User user ;
	@Column
	private String reviews;
	@Column
	private Integer ratings;
	
	public int getMrr_id() {
		return mrr_id;
	}
	public void setMrr_id(int mrr_id) {
		this.mrr_id = mrr_id;
	}
	
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	public Integer getRatings() {
		return ratings;
	}
	public void setRatings(Integer ratings) {
		this.ratings = ratings;
	}
	
	public Movies getMovie() {
		return movie;
	}
	public void setMovie(Movies movie) {
		this.movie = movie;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "MovieReviewRating [mrr_id=" + mrr_id + ", reviews="
				+ reviews + ", ratings=" + ratings + "]";
	}
	public MovieReviewRating( String reviews, Integer ratings) {
		super();
		this.reviews = reviews;
		this.ratings = ratings;
	}
	
	public MovieReviewRating( Movies movie, User user, String reviews, Integer ratings) {
		super();
		this.movie = movie;
		this.user = user;
		this.reviews = reviews;
		this.ratings = ratings;
	}
	public MovieReviewRating() {
		super();
	}
	
}
