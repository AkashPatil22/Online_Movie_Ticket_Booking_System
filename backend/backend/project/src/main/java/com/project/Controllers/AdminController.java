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

import com.project.Dto.Response;
import com.project.Service.AdminService;
import com.project.Service.HomeService;
import com.project.entities.SiteFeedback;
import com.project.entities.Theaters;
import com.project.entities.User;
import com.project.Dto.*;
@CrossOrigin(origins = "*")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;
	@Autowired
	private HomeService homeService;
	
	@PostMapping("/admin/addtheatre")
	public ResponseEntity<?> AddNewTheater(@RequestBody AddTheater userDto) {
		Theaters result = adminService.saveTheater(userDto);
		if(result == null)
			return Response.error("**Theatre is not added**");
		return Response.success(result);
	}
	
	@GetMapping("/admin/viewtheatres")
	public ResponseEntity<?> ViewTheaterList() {
		List<Theaters> theatreList = adminService.findAll();
		if(theatreList == null)
			return Response.error("**Theatre list is empty**");
		return Response.success(theatreList);
	}
	
	@PutMapping("/admin/updatetheatre/{theatreId}")
	public ResponseEntity<?> UpdateTheatre(@PathVariable int theatreId,@RequestBody AddTheater updateTheatre) {
		Theaters theatre=adminService.updateTheatre(theatreId,updateTheatre);
		if(theatre == null)
			return Response.error("**Theatre cannot be updated**");
		return Response.success(theatre);
	}
	
	@DeleteMapping("/admin/deletetheatre/{theaterid}")
	public ResponseEntity<?> deleteTheatre(@PathVariable int theaterid)
	{
		adminService.deleteTheaterById(theaterid);
		return Response.success("Deleted successfully");
	}
	
	@GetMapping("/admin/viewfeedback")
	public ResponseEntity<?> viewFeedback()
	{
		List<SiteFeedback> feedbackList = adminService.findAllFeedbacks();
		if(feedbackList == null)
			return Response.error("**Feedback list is empty**");
		return Response.success(feedbackList);
	}
	
	@GetMapping("/admin/viewtmanager")
	public ResponseEntity<?> viewTheaterManagerList()
	{
		List<Object[]> tmList = adminService.findAllManagers();
		if(tmList == null)
			return Response.error("** list is empty**");
		return Response.success(tmList);
	}
	
	@GetMapping("/admin/viewmanagerdetails/{userid}")
	public ResponseEntity<?> viewTheaterManagerDetails(@PathVariable int userid)
	{
		List<Object[]> u=adminService.getManager(userid);
		if(u == null)
			return Response.error("**Manager not found**");
		return Response.success(u);
	}
	
	@DeleteMapping("/admin/deletemanager/{userid}")
	public ResponseEntity<?> deleteTheaterManager(@PathVariable int userid)
	{
		adminService.deleteManagerById(userid);
		return Response.success("Deleted manager successfully");
	}
	
	@PostMapping("/admin/addmanager")
	public ResponseEntity<?> addTheaterManager(@RequestBody User user)
	{
		User u=adminService.saveManager(user);
		if(u == null)
			return Response.error("**Manager not saved**");
		return Response.success(u);
	}
	
	@PutMapping("/admin/updateuser/{userId}")
	public ResponseEntity<?> updateUserProfile(@PathVariable int userId,@RequestBody UpdateAdmin user)
	{
		User us=homeService.updateUser(userId,user);
		if(us == null)
			return Response.error("**User not updated**");
		return Response.success(us);
	}
	
	
}
