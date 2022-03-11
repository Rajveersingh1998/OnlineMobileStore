package com.app.dto;

public class MobileDTO {

	private int id;
	private String mname;
	private String mcolor;
	private String mImage;
	private String mprice;
	
	public MobileDTO() {
		
	}

	public MobileDTO(int id, String mname, String mcolor, String mImage, String mprice) {
	
		this.id = id;
		this.mname = mname;
		this.mcolor = mcolor;
		this.mImage = mImage;
		this.mprice = mprice;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getMcolor() {
		return mcolor;
	}

	public void setMcolor(String mcolor) {
		this.mcolor = mcolor;
	}

	public String getmImage() {
		return mImage;
	}

	public void setmImage(String mImage) {
		this.mImage = mImage;
	}

	public String getMprice() {
		return mprice;
	}

	public void setMprice(String mprice) {
		this.mprice = mprice;
	}

	@Override
	public String toString() {
		return "MobileDTO [id=" + id + ", mname=" + mname + ", mcolor=" + mcolor + ", mImage=" + mImage + ", mprice="
				+ mprice + "]";
	}
	
	
}
