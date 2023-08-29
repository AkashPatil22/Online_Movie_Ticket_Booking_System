package com.project.Controllers;

import com.project.entities.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JacksonInject;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.project.Dto.AddTheatreReviewDto;
import com.project.Dto.ChairAndStatusDto;
import com.project.Dto.Credentials;
import com.project.Dto.EmailFeedbackDto;
import com.project.Dto.MovieDetailsDto;
import com.project.Dto.PaymentDto;
import com.project.Dto.Response;
import com.project.Dto.ReviewRatingDto;
import com.project.Dto.ShowChair;
import com.project.Dto.TheatreAndTimeslot;
import com.project.Dto.ViewTicket;
import com.project.Service.ChairService;
import com.project.Service.HomeService;
import com.project.Service.PaymentService;

@CrossOrigin(origins = "*")
@RestController
public class HomeController {

	@Autowired
	private HomeService homeService;
	@Autowired
	private ChairService chairService;
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("/user/citylist")
	public ResponseEntity<?> getCityList()
	{
		List<Object> citylist = homeService.getAllCity();
		if(citylist == null)
			return Response.error("**No cities**");
		return Response.success(citylist);
	}
	
	@GetMapping("/user/bannertrending/{city}")
	public ResponseEntity<?> getBannerTrending(@PathVariable("city") String city)
	{
		Object[] banner = homeService.getBannerTrending(city);
		if(banner == null)
			return Response.error("**No Movies present **");
		return Response.success(banner);
	}
	
	@GetMapping("/user/bannerupcoming/{city}")
	public ResponseEntity<?> getBannerUpcoming(@PathVariable("city") String city)
	{
		Object[] banner = homeService.getBannerUpcoming(city);
		if(banner == null)
			return Response.error("**No Movies present **");
		return Response.success(banner);
	}
	@GetMapping("/user/list/{city}/{language}")
	public ResponseEntity<?> getMovieListByLanguage(@PathVariable("city") String city,@PathVariable("language") String language)
	{
		List<Object[]> tlist = homeService.findMovieByLanguage(city,language);
		if(tlist == null)
			return Response.error("**No Movies present in this city**");
		return Response.success(tlist);
	}
	
	@GetMapping("/user/Movielist/{city}/{genre}")
	public ResponseEntity<?> findMovieByGenre(@PathVariable("city") String cityname,@PathVariable("genre") String genre) {
		List<Object[]> tlist = homeService.findMovieByGenre(cityname,genre);
		if(tlist == null)
			return Response.error("**No Movies present in this city**");
		return Response.success(tlist);
	}
	
	@GetMapping("/user/movieslist/{city}/{theatre}")
	public ResponseEntity<?> findMovieByTheatre(@PathVariable("city") String cityname,@PathVariable("theatre") String theatre) {
		List<Object[]> mlist = homeService.findMovieByTheatre(cityname,theatre);
		if(mlist == null)
			return Response.error("**No Movies present in this city**");
		return Response.success(mlist);
	}
	
	@GetMapping("/user/Theaterlist/{city}/{movieid}")
	public ResponseEntity<?> getTheatreListByMovieId(@PathVariable("movieid") int movieid,@PathVariable("city")  String city)
	{
		List<Object[]> mlist = homeService.findTheaterByMovieId(movieid,city);
		if(mlist == null)
			return Response.error("**No theatres present for this movieid**");
		return Response.success(mlist);
	}
	
	@GetMapping("/user/Seatslist/{screenid}")
	public ResponseEntity<?> showSeats(@PathVariable("screenid") int screenid)
	{
		List<Object[]> mlist = chairService.showSeats(screenid);
		if(mlist == null)
			return Response.error("**No seats present in this city**");
		return Response.success(mlist);
	}
	
	@PostMapping("/user/Ticket/{movieid}")
	public ResponseEntity<?> getpriceofTickets(@PathVariable("movieid") int movieid,@RequestBody ShowChair showchair)
	{
		Double totalprice = chairService.showPriceForSelectedSeats(movieid,showchair);
		if(totalprice == null)
			return Response.error(0);
		return Response.success(totalprice);
	}
	
	@PostMapping("/user/Payment/{movieid}")
	public ResponseEntity<?> savePayment(@PathVariable("movieid") int movieid,@RequestBody PaymentDto payment)
	{
		Payment p = paymentService.savePayment(movieid,payment);
		if(p == null)
			return Response.error("**Not received payment**");
		return Response.success(p);
	}
	
	@PostMapping("/user/feedback")
	public ResponseEntity<?> setFeedBack(@RequestBody EmailFeedbackDto email)
	{
		SiteFeedback sfd=homeService.saveFeedback(email.getEmail(),email.getFeedback());
		if(sfd == null)
			return Response.error("**feedback not submitted**");
		return Response.success(sfd);
	}
	
	@GetMapping("/user/viewticket/{paymentid}")
	public ResponseEntity<?> viewTicket(@PathVariable int paymentid)
	{
		//ViewTicket vt = new ViewTicket();
		 List<Object[]> tkt=homeService.viewTicketById(paymentid);
		//vt.setMoviename(tkt.getMdetails().getMovie().getName());
		if(tkt == null)
			return Response.error("**No ticket found**");
		return Response.success(tkt);
	}
	
	@PutMapping("/user/updateuser")
	public ResponseEntity<?> updatePassword(@RequestBody Credentials cred)
	{
		User u=homeService.updatePassword(cred.getEmail(),cred.getPassword());
		if(u == null)
			return Response.error("**Password not updated**");
		return Response.success(u);
	}
	
	
	@PostMapping("/user/{theatreid}/addnewtheatrereview")
	public ResponseEntity<?> addNewTheatreReview(@PathVariable int theatreid, @RequestBody AddTheatreReviewDto treview)
	{
		TheaterReview tr = homeService.setNewTheatreReview(theatreid, treview);
		if(tr == null)
			return Response.error("**cannot add theatre review**");
		return Response.success(tr.getTreview_id());
	}
	
	@GetMapping("/user/{theatreid}/viewalltheatrereview")
	public ResponseEntity<?> viewAllTheatreReview(@PathVariable int theatreid)
	{
		List<Object[]> tr = homeService.viewAllTheatreReview(theatreid);
		if(tr == null)
			return Response.error("**theatre review cannot be retrived**");
		return Response.success(tr);
	}

	
	@PostMapping("/user/{movieid}/addreviewrating")
	public ResponseEntity<?> setReviewAndRating(@PathVariable int movieid,@RequestBody ReviewRatingDto reviewdto)
	{
		MovieReviewRating ratingreview = homeService.setMovieRating(movieid,reviewdto);
		if(ratingreview == null)
			return Response.error("**Review and rating not added**");
		return Response.success(ratingreview);
	}
	
	@GetMapping("/user/{movieid}/viewreviewrating")
	public ResponseEntity<?> getReviewAndRating(@PathVariable int movieid)
	{
		List<Object[]> ratingreview = homeService.findAllMovieRating(movieid);
		if(ratingreview == null)
			return Response.error("**Review and rating list is empty**");
		return Response.success(ratingreview);
	}
	
	
	
	
	@GetMapping("/user/checkbookinghistory/{userid}")
	public ResponseEntity<?> checkBookingHistory(@PathVariable int userid)
	{
		List<Object[]> cbh = homeService.checkBookingHistory(userid);
		if(cbh == null)
			return Response.error("**no tickets booked yet**");
		return Response.success(cbh);
	}
	
	
	
}
