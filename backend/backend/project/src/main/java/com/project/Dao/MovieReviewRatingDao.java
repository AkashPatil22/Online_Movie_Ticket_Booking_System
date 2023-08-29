package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.MovieReviewRating;

public interface MovieReviewRatingDao extends JpaRepository<MovieReviewRating, Integer>{

	@Query(value="select u.first_name, u.last_name , r.reviews,r.ratings from Movie_Review_Rating r inner join user u on u.user_id = r.user_id where r.movie_id=:movieid",nativeQuery = true)
	List<Object[]> findAllRatingReview(@Param("movieid")int movieid);

}
