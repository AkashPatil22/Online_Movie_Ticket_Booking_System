package com.project.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Dto.AddTheater;
import com.project.Dto.CounterPersonDto;
import com.project.Dto.MovieDetailsDto;
import com.project.Dto.PriceDto;
import com.project.Dto.Response;
import com.project.Dto.UpdateAdmin;
import com.project.Service.AdminService;
import com.project.Service.HomeService;
import com.project.Service.ScreenService;
import com.project.entities.CounterPerson;
import com.project.entities.MovieDetails;
import com.project.entities.Screen;
import com.project.entities.TheaterReview;
import com.project.entities.Theaters;
import com.project.entities.User;


@CrossOrigin(origins = "*")
@RestController
public class ManagerController {
	
	@Autowired
	private ScreenService screenService;
	@Autowired
	private HomeService homeService;
	@Autowired
	private AdminService adminService;
	
	@GetMapping("/manager/viewscreens/{theatreId}")
	public ResponseEntity<?> ViewScreenList(@PathVariable int theatreId) {
		 List<Object[]> screenList = screenService.findAllByTheatre(theatreId);
		if(screenList == null)
			return Response.error("**Screen list is empty**");
		return Response.success(screenList);
	}

	@GetMapping("/manager/viewmoviedetails/{movieDetailsId}")
	public ResponseEntity<?> ViewMovieDetails(@PathVariable int movieDetailsId) {
		Object[] movie = screenService.findMovieDetailsById(movieDetailsId);
		if(movie == null)
			return Response.error("**Cannot find movie details**");
		return Response.success(movie);
	}

	@PostMapping("/manager/addnewmoviedetails")
	public ResponseEntity<?> AddNewMovieDetails(@RequestBody MovieDetailsDto movie) {
		
		MovieDetails moviedetails = screenService.addMovieDetails(movie);
		if(moviedetails == null)
			return Response.error("**movie not added**");
		return Response.success(moviedetails);
	}
	
	@GetMapping("/manager/viewtheatrereview/{theatreId}")
	public ResponseEntity<?> ViewTheatreReview(@PathVariable int theatreId){
		List<Object[]> reviewList = adminService.getTheatreReview(theatreId);
		if(reviewList == null)
			return Response.error("** theatre does not have any reviews yet**");
		return Response.success(reviewList);
	}
	
	@GetMapping("/manager/viewcounterpersonList/{theatreId}") 
	public ResponseEntity<?> ViewCounterPersonList(@PathVariable int theatreId){
		List<Object[]> cpList = adminService.getCounterPersonList(theatreId);
		if(cpList == null)
			return Response.error("** list is empty**");
		return Response.success(cpList);
	}
	
	@GetMapping("/manager/viewcounterperson/{cpId}")
	public ResponseEntity<?> ViewCounterPerson(@PathVariable int cpId){ 
		List<Object[]> cp= screenService.getCounterPersonById(cpId);
		if(cp == null) 
			return Response.error("** CounterPerson not found**");
		return Response.success(cp);
	}
	
	@PostMapping("/manager/addcounterperson")
	public ResponseEntity<?> AddCounterPerson(@RequestBody CounterPersonDto cp)
	{
		int newcp =screenService.addCounterPerson(cp);
		if(newcp == 0) //change
			return Response.error("**Counterperson not addded**");
		return Response.success(newcp);
	}
	
	
	@GetMapping("/manager/viewregisteredtheatres/{theatremanagerid}")
	public ResponseEntity<?> ViewAllRegisteredTheatreDetails(@PathVariable int theatremanagerid)
	{
		List<Object[]> list=screenService.getAllTheatredetailsById(theatremanagerid);
		if(list == null) 
			return Response.error("**Nothing to display**");
		return Response.success(list);
	}
		
	@PutMapping("/manager/updatecounter/{cpid}")
	public ResponseEntity<?> updateCounter(@PathVariable int cpid,@RequestBody UpdateAdmin user)
	{
		int userid= screenService.updateCounter(cpid);
		User u = homeService.updateUser(userid,user);
		if(u == null) 
			return Response.error("**Counter not updated**");
		return Response.success(u);
	}
	
	@GetMapping("/manager/viewchairprice/{screenid}")
	public ResponseEntity<?> ViewChairPrice(@PathVariable int screenid)
	{
		List<Object[]> priceandtype = screenService.getSeatPriceByScreenId(screenid);
		if(priceandtype == null) 
			return Response.error("**NO price details**");
		return Response.success(priceandtype);
	}
	
	@PutMapping("/manager/updatechairprice/{screenid}")
	public ResponseEntity<?> UpdateChairPrice(@PathVariable int screenid,@RequestBody PriceDto price)
	{
		List<Object[]> priceandtype = screenService.updatePrice(screenid,price);
		if(priceandtype == null) 
			return Response.error("**Price details not updated**");
		return Response.success(priceandtype);
	}
	
	
	
		
	
}
