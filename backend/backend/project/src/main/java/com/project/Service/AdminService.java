package com.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.CounterPersonDao;
import com.project.Dao.FeedBackDao;
import com.project.Dao.HomeDao;
import com.project.Dao.UserDao;
import com.project.Dto.AddTheater;
import com.project.Dto.Credentials;
import com.project.Dto.UserSignUp;
import com.project.entities.CounterPerson;
import com.project.entities.SiteFeedback;
import com.project.entities.TheaterReview;
import com.project.entities.Theaters;
import com.project.entities.User;

@Transactional
@Service
public class AdminService {

	@Autowired
	private HomeDao homedao;
	
	@Autowired
	private FeedBackDao feedbackdao;
	
	@Autowired
	private UserDao userdao;
	
	@Autowired
	private CounterPersonDao cpdao;
	
	public Theaters saveTheater(AddTheater nt) {
				
		User manager = userdao.getById(nt.getManagerid());
		Theaters th=new Theaters(nt.getTheatername(),nt.getAddress(),nt.getCity(),nt.getScreencount(),nt.getFacilities(),nt.getCountersCount(),nt.getGstNumber(),manager);
		return homedao.save(th);
	}

	public List<Theaters> findAll() {
		List<Theaters> theatreList = homedao.findAll();
		return theatreList;
	}

	public Theaters updateTheatre(int theatreId, AddTheater updateTheatre) {
		Theaters t = homedao.getById(theatreId);
		t.setAddress(updateTheatre.getAddress());
		t.setName(updateTheatre.getTheatername());
		t.setCity(updateTheatre.getCity());
		t.setFacilities(updateTheatre.getFacilities());
		t.setCounters_count(updateTheatre.getCountersCount());
		t.setScreens_count(updateTheatre.getScreencount());
		t.setLicense_no(updateTheatre.getGstNumber());
		return homedao.save(t);
	}

	public void deleteTheaterById(int theaterid) {
		homedao.deleteById(theaterid);
	}

	public List<SiteFeedback> findAllFeedbacks() {
		return feedbackdao.findAll();
	}

	public List<Object[]> findAllManagers() {
		return userdao.findByRole();
	}

	public List<Object[]> getManager(int userid) {
		return userdao.getManagerDetails(userid);
	}

	public void deleteManagerById(int userid) {
		userdao.deleteById(userid);
	}

	public User saveManager(User user) {
		return userdao.save(user);
	}

	public Theaters findTheatreById(int theatreId) {
		return homedao.getById(theatreId);
		
	}

	public List<Object[]> getTheatreReview(int theatreId) {
		return homedao.findTheatreReviews(theatreId);	 
	}

	public List<Object[]> getCounterPersonList(int theatreId) {
        List<Object[]> list = cpdao.findCounterPersonByTheatreId(theatreId);
		return list;
	}

	public User findUserByEmail(Credentials cred) {
		User u = userdao.findByEmail(cred.getEmail());
		if(u.getPassword().equals(cred.getPassword()))
		     return u;
		return null;
	}

	//String first_name, String last_name, String address, String contact_no, String email,
	//String password, String role
	public User saveNewUser(UserSignUp user) {
		User u = new User(user.getFirstname(),user.getLastname(),user.getAddress(),user.getMobile(),user.getEmail(),user.getPassword(),"user");
		return userdao.save(u);
	}

	
	
	
	
}
