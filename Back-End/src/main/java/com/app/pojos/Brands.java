package com.app.pojos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name="brands")
public class Brands extends BaseEntity{
   
	@Column(length = 20, nullable=false, unique=true)
	@JsonProperty("bname")
	private String brandName;
	
	@Column(length = 30)
	private String brandImage;

	@OneToMany(mappedBy="chosenBrand",cascade = CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
	private List<Mobiles> mobiles=new ArrayList<>();
	
	@OneToMany(mappedBy="brandId",cascade = CascadeType.ALL,orphanRemoval=true)
	@JsonIgnore
	private List<Cart> brandInCart=new ArrayList<>();
	
	public Brands() {
		
	}

	public Brands(String brandName, String brandImage) {
		
		this.brandName = brandName;
		this.brandImage = brandImage;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getBrandImage() {
		return brandImage;
	}

	public void setBrandImage(String brandImage) {
		this.brandImage = brandImage;
	}
	
	
		public List<Mobiles> getMobiles() {
		return mobiles;
	}

		// Suggestion from the founder : add helper methods : for establishing the link
		// is it mandatory : NO , Optional BUT reco.
		public void addMobiles(Mobiles m) {
			// add mobile ref in the brand
			mobiles.add(m);// brand --> mobile
			// assign brand ref to the mobiles
			m.setChosenBrand(this);
		}

		public void removeMobiles(Mobiles m) {
			
			mobiles.remove(m);
			
			m.setChosenBrand(null);
		}

		@Override
		public String toString() {
			return "Brands [brandName=" + brandName + ", brandImage=" + brandImage + "]";
		}

	
	
	
}

