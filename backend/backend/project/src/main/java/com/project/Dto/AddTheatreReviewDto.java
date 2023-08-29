package com.project.Dto;

public class AddTheatreReviewDto {
	private int user_id;
	private String review;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	@Override
	public String toString() {
		return "AddTheatreReviewDto [user_id=" + user_id + ", review=" + review + "]";
	}
	public AddTheatreReviewDto(int user_id, String review) {
		super();
		this.user_id = user_id;
		this.review = review;
	}
	public AddTheatreReviewDto() {
		super();
	}
	
	

}
