package com.app.pojos;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
	
	@Column(length = 20 ,nullable=false)
	private String mobImage;
	
	@Column(nullable=false )
	@JsonProperty("avlQty")
	private int quantity;
	
	@Column(unique = true, nullable=false)
	@JsonProperty("imei")
	private String imei;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonProperty("mdate")
	private LocalDate manufDate;
	
	@Column(length=20, nullable=false)
	@JsonProperty("mprice")
	private double price;
	
	@Column(name="tag")
	private String flag;
	
	@ManyToOne(optional = true,targetEntity = Brands.class)
	@JoinColumn(name = "brand_id",nullable = false )//=> NOT NULL constraint
	private Brands chosenBrand;
	
	@OneToMany(mappedBy="mobileId",cascade = CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
	private List<Cart> mobileInCart=new ArrayList<>();

	public Mobiles() {
		
	}
	//(id,mobName,mobColor,mobImage,price)
	

	public Mobiles(String mobModel, String mobName, String mobColor, String mobImage, String imei, LocalDate mdate,
			double price, String flag) {
		super();
		this.mobModel = mobModel;
		this.mobName = mobName;
		this.mobColor = mobColor;
		this.mobImage = mobImage;
		this.imei = imei;
		this.manufDate = mdate;
		this.price = price;
		this.flag = flag;
	}
    
	
	public Mobiles(String mobModel, String mobName, String mobColor, String mobImage, int quantity, String imei,
			LocalDate manufDate, double price, String flag) {
		super();
		this.mobModel = mobModel;
		this.mobName = mobName;
		this.mobColor = mobColor;
		this.mobImage = mobImage;
		this.quantity = quantity;
		this.imei = imei;
		this.manufDate = manufDate;
		this.price = price;
		this.flag = flag;
	}


	public Mobiles(Integer id,String mobName, String mobColor, String mobImage, double price) {
		super.setId(id);
		this.mobName = mobName;
		this.mobColor = mobColor;
		this.mobImage = mobImage;
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

	public String getMobImage() {
		return mobImage;
	}

	public void setMobImage(String mobImage) {
		this.mobImage = mobImage;
	}

	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
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

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Brands getChosenBrand() {
		return chosenBrand;
	}

	public void setChosenBrand(Brands chosenBrand) {
		this.chosenBrand = chosenBrand;
	}
    
	public List<Cart> getMobileInCart() {
		return mobileInCart;
	}


	public void setMobileInCart(List<Cart> mobileInCart) {
		this.mobileInCart = mobileInCart;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Mobiles [mobModel=" + mobModel + ", mobName=" + mobName + ", mobColor=" + mobColor + ", mobImage="
				+ mobImage + ", imei=" + imei + ", manufDate=" + manufDate + ", price=" + price + ", flag=" + flag
				+ "]";
	}
	
    
	
	
	
	
	
}
