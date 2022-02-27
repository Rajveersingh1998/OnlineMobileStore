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

import com.fasterxml.jackson.annotation.JsonProperty;
//Hibernate follows default fetching policies for different types of asso.
//one-to-one : EAGER
//one-to-many : LAZY
//many-to-one : EAGER
//many-to-many : LAZY
//
//When will hibernate throw org.hibernate.LazyInitializationException ????
//Any time , you are trying to access un -fetched data from DB , outside the session ctx (when the entities are in DETACHED mode) .
//
//Solutions 
//1. in case of size of many is small : change fetch type to eager
//@OneToMany(mappedBy="chosenCourse",cascade=CascadeType.ALL,orphanRemoval=true,fetch=FecthType.EAGER)
//private List<Student> students=new AL<>();
//
//
//
//
//2. Simply access the size of the collection , within session ctx
//Additional select query will be fired!
//
//3. join fetch
//Objective : In a single query , lift course n it's asso student  details
//eg : jpql="select c from Course c join fetch c.students  where c.title=:title";

@Entity
@Table(name="brands")
public class Brands extends BaseEntity{
   
	@Column(length = 20, nullable=false, unique=true)
	@JsonProperty("bname")
	private String brandName;
	
	@Lob
	@JsonProperty("bthumb")
	private byte[] brandImage;

	@OneToMany(mappedBy="chosenBrand",cascade = CascadeType.ALL,orphanRemoval=true)
	private List<Mobiles> mobiles=new ArrayList<>();
	
	public Brands() {
		super();
	}

	public Brands(String brandName, byte[] brandImage) {
		super();
		this.brandName = brandName;
		this.brandImage = brandImage;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public byte[] getBrandImage() {
		return brandImage;
	}

	public void setBrandImage(byte[] brandImage) {
		this.brandImage = brandImage;
	}
	
	// Suggestion from the founder : add helper methods : for establishing the link
		// is it mandatory : NO , Optional BUT reco.
		public void addMobiles(Mobiles m) {
			// add mobile ref in the brand
			mobiles.add(m);// brand --> mobile
			// assign brand ref to the mobiles
			m.setChosenBrand(this);
		}

		public void removeStudent(Mobiles m) {
			
			mobiles.remove(m);
			
			m.setChosenBrand(null);
		}

	@Override
	public String toString() {
		return "Brands [brandName=" + brandName + ", brandImage=" + Arrays.toString(brandImage) + "]";
	}
	
	
	
}

