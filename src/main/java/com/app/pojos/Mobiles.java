package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name = "mobiles")
public class Mobiles extends BaseEntity{
 
	@Column(length=20, nullable=false, unique=true)
	@JsonProperty("mmodel")
	private String mobModel;
	@Column(length=20, nullable=false)
	@JsonProperty("mname")
	private String mobName;
	@Column(length=20, nullable=false)
	@JsonProperty("mcolor")
	private String mobColor;
	
	@Lob
	private byte[] image;
	
	@Column(unique = true, nullable=false)
	@JsonProperty("imei")
	private int imei;
	@JsonProperty("mdate")
	private LocalDate manufDate;
	@Column(length=20, nullable=false)
	@JsonProperty("mprice")
	private double price;
	
	@ManyToOne
	@JoinColumn(name = "brand_id",nullable = false)//=> NOT NULL constraint
	private Brands chosenBrand;
	
	public Mobiles() {
	
	}

	public Mobiles(String mobModel, String mobName, String mobColor, int imei, LocalDate manufDate, double price) {
		super();
		this.mobModel = mobModel;
		this.mobName = mobName;
		this.mobColor = mobColor;
		this.imei = imei;
		this.manufDate = manufDate;
		this.price = price;
	}

	public String getMobModel() {
		return mobModel;
	}

	public void setMobModel(String mobModel) {
		this.mobModel = mobModel;
	}

	public String getMobName() {
		return mobName;
	}

	public void setMobName(String mobName) {
		this.mobName = mobName;
	}

	public String getMobColor() {
		return mobColor;
	}

	public void setMobColor(String mobColor) {
		this.mobColor = mobColor;
	}

	public int getImei() {
		return imei;
	}

	public void setImei(int imei) {
		this.imei = imei;
	}

	public LocalDate getManufDate() {
		return manufDate;
	}

	public void setManufDate(LocalDate manufDate) {
		this.manufDate = manufDate;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	
	public Brands getChosenBrand() {
		return chosenBrand;
	}

	public void setChosenBrand(Brands chosenBrand) {
		this.chosenBrand = chosenBrand;
	}

	@Override
	public String toString() {
		return "Mobiles [mobModel=" + mobModel + ", mobName=" + mobName + ", mobColor=" + mobColor + ", imei=" + imei
				+ ", manufDate=" + manufDate + ", price=" + price + "]";
	}
	
	
	
	
	
}
