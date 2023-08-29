package com.project.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.project.Dao.ChairDao;
import com.project.Dao.CounterPersonDao;
import com.project.Dao.HomeDao;
import com.project.Dao.MovieDetailsDao;
import com.project.Dao.PaymentDao;

import com.project.Dao.ScreenDao;
import com.project.Dao.TicketDao;
import com.project.Dao.UserDao;
import com.project.Dto.PaymentDto;
import com.project.Dto.ShowChair;
import com.project.entities.ChairStatus;
import com.project.entities.CounterPerson;
import com.project.entities.MovieDetails;
import com.project.entities.Payment;
import com.project.entities.Screen;
import com.project.entities.Theaters;
import com.project.entities.Ticket;
import com.project.entities.User;

@Transactional
@Service
public class PaymentService {
	@Autowired
	private PaymentDao paymentDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private ChairDao chairdao;
	@Autowired
	private TicketDao ticketdao;
	@Autowired
	private MovieDetailsDao moviedetailsDao;
	@Autowired
	private HomeDao homedao;
	@Autowired
	private ScreenDao screenDao;
	@Autowired
	private CounterPersonDao cpDao;
	
	public Payment savePayment(int movieid,PaymentDto payment) {
		User u;
		CounterPerson cp;
		if(payment.getUserid()!=0)
		{
		if(!(userDao.getById(payment.getUserid()).getRole().equals("counter_person")))
		{
		 u= userDao.getById(payment.getUserid());
		 cp=null;
		}
		else 
		{
			u = new User();
			u.setEmail(payment.getEmail());
			u.setContact_no(payment.getContactNo());
			u=userDao.save(u);
			cp =cpDao.getByUser_id(payment.getUserid());
		}
		}
		else
		{
			u = new User();
			u.setEmail(payment.getEmail());
			u.setContact_no(payment.getContactNo());
			u=userDao.save(u);
			cp=null;			
		}
		Payment p=new Payment(u,LocalDateTime.now() ,payment.getPrice(),payment.getPaymentMode());
		p=paymentDao.save(p);
		
		String idlist1=payment.getChairstatusid();
		
			String idlist=idlist1.replace("[", "").replace("]", "");
			System.out.println(idlist);
			idlist.strip();
			String[] splittedids= idlist.split(",");
			List<Integer> arr=new ArrayList<>();
			for(String str:splittedids)
			{
				arr.add(Integer.parseInt(str));
			}
			System.out.println(arr);
		
		for(int id :arr)
		{//String ticket_name, User user, Payment payment, MovieDetails mdetails,Theaters theater, Screen screen, ChairStatus chair, CounterPerson counterperson
			ticketdao.save(new Ticket(u,p,moviedetailsDao.getById(movieid),homedao.getById(payment.getTheaterid()),screenDao.getById(payment.getScreenid()),chairdao.getById(id),cp));
		   chairdao.updateChairStatus(id);
		   
		}
		return p;
	}

}
