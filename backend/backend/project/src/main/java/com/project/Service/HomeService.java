package com.project.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.FeedBackDao;
import com.project.Dao.HomeDao;
import com.project.Dao.MovieDao;
import com.project.Dao.MovieReviewRatingDao;
import com.project.Dao.TheatreReviewDao;
import com.project.Dao.TicketDao;
import com.project.Dao.UserDao;
import com.project.Dto.AddTheatreReviewDto;
import com.project.Dto.MovieDetailsDto;
import com.project.Dto.ReviewRatingDto;
import com.project.Dto.TheatreAndTimeslot;
import com.project.Dto.UpdateAdmin;
import com.project.entities.*;


@Transactional
@Service
public class HomeService {

	@Autowired
	private HomeDao homeDao;
	@Autowired
	private MovieDao movieDao;
	@Autowired
	private MovieReviewRatingDao ratingdao;
	@Autowired
	private FeedBackDao feedbackdao;
	@Autowired
	private TicketDao ticketdao;
	@Autowired
	private UserDao userdao;
	@Autowired
	private TheatreReviewDao trdao;

	public List<Object[]> findMovieByCity(String cityname) {
		return homeDao.findAllByCity(cityname);		
	}

	public List<Object[]> findMovieByLanguage(String city, String language) {
		return homeDao.findAllByLanguage(city,language);
	}

	public List<Object[]> findMovieByGenre(String cityname, String genre) {
		return homeDao.findAllByGenre(cityname,genre);
	}

	public List<Object[]> findMovieByTheatre(String cityname, String theatre) {
		return homeDao.findAllByTheatre(cityname,theatre);
	}

	public List<Object[]> findTheaterByMovieId(int movieid, String city) {
		return homeDao.findAllByMovieId(movieid,city);
	}

	public SiteFeedback saveFeedback(String email, String feedback)
	{
		return feedbackdao.save(new SiteFeedback(email,feedback));
	}

	public List<Object[]> viewTicketById(int paymentid) {
		return ticketdao.getTicketById(paymentid);
	}

	public User updatePassword(String email, String pass) {
		User u=userdao.findByEmail(email);
		u.setPassword(pass);
		return userdao.save(u);
	}
	
	public User updateUser(int userId, UpdateAdmin user) {
		User u = userdao.getById(userId);
		u.setAddress(user.getAddress());
		u.setContact_no(user.getMobile());
		u.setEmail(user.getEmail());
		u.setFirst_name(user.getFirstname());
		u.setLast_name(user.getLastname());
		return userdao.save(u);
	}

	public TheaterReview setNewTheatreReview(int theatreid, AddTheatreReviewDto treview) {
		User u = userdao.getById(treview.getUser_id());
		Theaters t = homeDao.getById(theatreid);
		//int treview_id, Theaters theater, User user, String reviews
		TheaterReview tr = trdao.save(new TheaterReview(t,u,treview.getReview()));
		return tr;
	}

	public List<Object[]> viewAllTheatreReview(int theatreid) {
		List<Object[]> tr = trdao.getAllTheatreReview(theatreid);
		return tr;
	}

	public MovieReviewRating setMovieRating(int movieid, ReviewRatingDto reviewdto) {
		MovieReviewRating rating = ratingdao.save(new MovieReviewRating(movieDao.getById(movieid),userdao.getById(reviewdto.getUser_id()),reviewdto.getReviews(),reviewdto.getRatings()));
		return rating;
	}

	public List<Object[]> findAllMovieRating(int movieid) {
		return ratingdao.findAllRatingReview(movieid);
		 
	}
	
	public List<Object[]> checkBookingHistory(int userid) {
		List<Object[]> cbh = ticketdao.getAllBookingHistory(userid);
		return cbh;
	}

	public List<Object> getAllCity() {
		return homeDao.getCity();
	}

	public Object[] getBannerTrending(String city) {
		return homeDao.getBannerForTrending(city);
	}
	
	public Object[] getBannerUpcoming(String city) {
		return homeDao.getBannerForUpcoming(city);
	}
	

}
