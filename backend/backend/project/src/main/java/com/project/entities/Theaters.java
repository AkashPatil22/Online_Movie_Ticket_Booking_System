package com.project.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Theatres")
public class Theaters 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int theatre_id;
	@Column
	private String name;
	@Column
	private String address;
	@Column
	private String city;
	@Column
	private int screens_count;
	@Column
	private String facilities;
	@Column
	private int counters_count;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column
	private String license_no;
	/*
	 * @OneToMany(mappedBy = "theater", fetch = FetchType.EAGER, cascade =
	 * CascadeType.ALL) // FK field name private List<Ticket> ticketList;
	 * 
	 * @OneToMany(mappedBy = "theater", fetch = FetchType.LAZY, cascade =
	 * CascadeType.ALL) // FK field name private List<CounterPerson>
	 * counterpersonList;
	 * 
	 * @OneToMany(mappedBy = "theater", fetch = FetchType.LAZY, cascade =
	 * CascadeType.ALL) // FK field name private List<TheaterReview> theaterrList;
	 */
	
	public int getTheatre_id() {
		return theatre_id;
	}
	public void setTheatre_id(int theatre_id) {
		this.theatre_id = theatre_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getScreens_count() {
		return screens_count;
	}
	public void setScreens_count(int screens_count) {
		this.screens_count = screens_count;
	}
	public String getFacilities() {
		return facilities;
	}
	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}
	public int getCounters_count() {
		return counters_count;
	}
	public void setCounters_count(int counters_count) {
		this.counters_count = counters_count;
	}
	public String getLicense_no() {
		return license_no;
	}
	public void setLicense_no(String license_no) {
		this.license_no = license_no;
	}
	
	/*
	 * public List<Ticket> getTicketList() { return ticketList; } public void
	 * setTicketList(List<Ticket> ticketList) { this.ticketList = ticketList; }
	 * public List<CounterPerson> getCounterpersonList() { return counterpersonList;
	 * } public void setCounterpersonList(List<CounterPerson> counterpersonList) {
	 * this.counterpersonList = counterpersonList; }
	 */
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	/*
	 * public List<TheaterReview> getTheaterrList() { return theaterrList; } public
	 * void setTheaterrList(List<TheaterReview> theaterrList) { this.theaterrList =
	 * theaterrList; }
	 */
	@Override
	public String toString() {
		return "Theaters [theatre_id=" + theatre_id + ", name=" + name + ", address=" + address + ", city=" + city
				+ ", screens_count=" + screens_count + ", facilities=" + facilities + ", counters_count="
				+ counters_count + ", license_no=" + license_no + "]";
	}
	public Theaters(String name, String address, String city, int screens_count, String facilities,
			int counters_count, String license_no) {
		super();
		this.name = name;
		this.address = address;
		this.city = city;
		this.screens_count = screens_count;
		this.facilities = facilities;
		this.counters_count = counters_count;
		this.license_no = license_no;
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.counterpersonList = new
		 * ArrayList<CounterPerson>(); this.theaterrList = new
		 * ArrayList<TheaterReview>();
		 */
	}
	
	public Theaters(String name, String address, String city, int screens_count, String facilities,
			int counters_count, String license_no,User user) {
		super();
		this.name = name;
		this.address = address;
		this.city = city;
		this.screens_count = screens_count;
		this.facilities = facilities;
		this.counters_count = counters_count;
		this.user = user;
		this.license_no = license_no;
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.counterpersonList = new
		 * ArrayList<CounterPerson>(); this.theaterrList = new
		 * ArrayList<TheaterReview>();
		 */
	}
	public Theaters() {
		super();
		/*
		 * this.ticketList = new ArrayList<Ticket>(); this.counterpersonList = new
		 * ArrayList<CounterPerson>(); this.theaterrList = new
		 * ArrayList<TheaterReview>();
		 */
	}
	
}
