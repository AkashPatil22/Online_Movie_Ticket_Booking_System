package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.MovieDetails;
import com.project.entities.TheaterReview;

public interface TheatreReviewDao extends JpaRepository<TheaterReview,Integer>{

	@Query(value="select concat(u.first_name,\" \",u.last_name) as name, tr.reviews from user u inner join theatre_review tr on tr.user_id = u.user_id where tr.theatre_id = :theatreid",nativeQuery = true)
	List<Object[]> getAllTheatreReview(@Param("theatreid") int theatreid);


}
