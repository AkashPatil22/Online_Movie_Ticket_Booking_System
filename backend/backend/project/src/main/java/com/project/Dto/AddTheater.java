package com.project.Dto;

public class AddTheater {

	private String theatername;
	private String address;
	private String city;
	private int screencount;
	private String facilities;
	private int countersCount;
	private int managerid;
	private String gstNumber;
	
	public AddTheater() {
		super();
	}
	
	public AddTheater(String theatername, String address, String city, int screencount, String facilities,
			int countersCount, int managerid, String gstNumber) {
		super();
		this.theatername = theatername;
		this.address = address;
		this.city = city;
		this.screencount = screencount;
		this.facilities = facilities;
		this.countersCount = countersCount;
		this.managerid = managerid;
		this.gstNumber = gstNumber;
	}

	public String getTheatername() {
		return theatername;
	}
	public void setTheatername(String theatername) {
		this.theatername = theatername;
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
	public int getScreencount() {
		return screencount;
	}
	public void setScreencount(int screencount) {
		this.screencount = screencount;
	}
	public String getFacilities() {
		return facilities;
	}
	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}
	public int getCountersCount() {
		return countersCount;
	}
	public void setCountersCount(int countersCount) {
		this.countersCount = countersCount;
	}
	public int getManagerid() {
		return managerid;
	}
	public void setManagerid(int managerid) {
		this.managerid = managerid;
	}
	public String getGstNumber() {
		return gstNumber;
	}
	public void setGstNumber(String gstNumber) {
		this.gstNumber = gstNumber;
	}
	@Override
	public String toString() {
		return "AddTheater [theatername=" + theatername + ", address=" + address + ", city=" + city + ", screencount="
				+ screencount + ", facilities=" + facilities + ", countersCount=" + countersCount + ", managerid="
				+ managerid + ", gstNumber=" + gstNumber + "]";
	}
	
}
