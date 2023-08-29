package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entities.CounterPerson;
import com.project.entities.User;

public interface CounterPersonDao extends JpaRepository<CounterPerson, Integer> {
 
	  @Query(value="select u.user_id,u.first_name,u.last_name,u.address, u.contact_no,u.email,u.password,u.role from user u inner join counter_person cp on cp.user_id = u.user_id where cp.theatre_id =:theatreId",nativeQuery = true )
	  List<Object[]> findCounterPersonByTheatreId(@Param("theatreId") int theatreId);
	  
	  @Query(value = "select * from Counter_Person where user_id=:userid",nativeQuery = true)
	  CounterPerson getByUser_id(@Param("userid")int userid);
    
	  @Query(value = "select counter_name from Counter_Person where user_id=:cpUserId",nativeQuery = true)
	  List<Object[]> getCounterById(@Param("cpUserId") int cpUserId);
}
