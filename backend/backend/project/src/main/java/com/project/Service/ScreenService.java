package com.project.Service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.Dao.ChairDao;
import com.project.Dao.CounterPersonDao;
import com.project.Dao.HomeDao;
import com.project.Dao.MovieDao;
import com.project.Dao.MovieDetailsDao;
import com.project.Dao.ScreenDao;
import com.project.Dao.UserDao;
import com.project.Dto.CounterPersonDto;
import com.project.Dto.MovieDetailsDto;
import com.project.Dto.PriceDto;
import com.project.entities.CounterPerson;
import com.project.entities.MovieDetails;
import com.project.entities.Movies;
import com.project.entities.Screen;
import com.project.entities.Theaters;
import com.project.entities.User;

@Transactional
@Service
public class ScreenService {
	@Autowired
	ScreenDao screenDao;
	@Autowired
	ChairDao chairdao;
	@Autowired
	MovieDetailsDao moviedetailsDao;
	@Autowired
	MovieDao movieDao;
	@Autowired
	CounterPersonDao cpDao;
	@Autowired
	UserDao userdao;
	@Autowired
	HomeDao homedao;

	public  List<Object[]> findAllByTheatre(int theatreId) {
		 List<Object[]> screenList = screenDao.FindScreenById(theatreId);
		return screenList;
	}

	public Object[] findMovieDetailsById(int movieDetailsId) {
		Object[] movie = moviedetailsDao.getMovieDetailsById(movieDetailsId);
		return movie;
	}
	
	public MovieDetails addMovieDetails(MovieDetailsDto movie) {
		Movies m = movieDao.save(new Movies(movie.getName(),movie.getDescription(),movie.getCertification(),movie.getRelease_date(),movie.getStatus(),movie.getBanner()));
		MovieDetails md = moviedetailsDao.save(new MovieDetails(m,movie.getGenre(),movie.getLanguage(),movie.getFormat()));
		return md;
		
	}

	public List<Object[]> getCounterPersonById(int cpUserId) {   
	       return cpDao.getCounterById(cpUserId); 
	   }
	

	public int addCounterPerson(CounterPersonDto cp) { 
		
		Theaters th = homedao.getById(cp.getTheatreid());
		User u=userdao.save(new User(cp.getFirstName(),cp.getLastName(),cp.getAddress(),cp.getContactNo(),cp.getEmail(),cp.getPassword(),cp.getRole()));
		CounterPerson counter=cpDao.save(new CounterPerson(u,th,cp.getCounterName()));
		return counter.getCp_id();  //change
	}
	
	public List<Object[]> getAllTheatredetailsById(int theatremanagerid) {
		return (List<Object[]>) homedao.getTheatresByManagerId(theatremanagerid);
	}

	public int updateCounter(int cpid) {
		CounterPerson cp=cpDao.getById(cpid);
		return cp.getUser().getUser_id();
	}

	public List<Object[]> getSeatPriceByScreenId(int screenid) {
		return chairdao.getByscreenId(screenid);
	}

	public List<Object[]> updatePrice(int screenid,PriceDto price) {
		chairdao.updatePriceByscreenId(screenid,price.getName(),price.getPrice());
//		chairdao.updateSilverPriceByscreenId(screenid, price.getSilverprice());
		return chairdao.getByscreenId(screenid);
	}
	

}
