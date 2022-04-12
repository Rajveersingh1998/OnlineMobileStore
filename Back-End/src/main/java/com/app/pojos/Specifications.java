package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name="specifications")
public class Specifications extends BaseEntity{

	@Column(length=30)
	@JsonProperty("ram")
	private String ram;
	@Column(length=30)
	@JsonProperty("rom")
	private String rom;
	@Column(length=30)
	@JsonProperty("ssize")
	private String screenSize;
	@Column(length=30)
	@JsonProperty("battery")
	private String battery;
	@Column(length=30)
	@JsonProperty("os")
	private String os;
	@Column(length=30)
	@JsonProperty("network")
	private String network;
	@Column(length=30)
	@JsonProperty("sim")
	private String sim;
	@Column(length=30)
	@JsonProperty("rcam")
	private String rearCam;
	@Column(length=30)
	@JsonProperty("fcam")
	private String frontCam;
	@Column(length=30)
	@JsonProperty("dim")
	private String dimensions;
	
	
	@OneToOne
	@JoinColumn(name="mobile_id",nullable=false)
	private Mobiles mobile;
	
	public Specifications() {
		super();
	}


	public Specifications(String ram, String rom, String screenSize, String battery, String os, String network,
			String sim, String rearCam, String frontCam, String dimensions) {
		super();
		this.ram = ram;
		this.rom = rom;
		this.screenSize = screenSize;
		this.battery = battery;
		this.os = os;
		this.network = network;
		this.sim = sim;
		this.rearCam = rearCam;
		this.frontCam = frontCam;
		this.dimensions = dimensions;
	}


	public String getRam() {
		return ram;
	}


	public void setRam(String ram) {
		this.ram = ram;
	}


	public String getRom() {
		return rom;
	}


	public void setRom(String rom) {
		this.rom = rom;
	}


	public String getScreenSize() {
		return screenSize;
	}


	public void setScreenSize(String screenSize) {
		this.screenSize = screenSize;
	}


	public String getBattery() {
		return battery;
	}


	public void setBattery(String battery) {
		this.battery = battery;
	}


	public String getOs() {
		return os;
	}


	public void setOs(String os) {
		this.os = os;
	}


	public String getNetwork() {
		return network;
	}


	public void setNetwork(String network) {
		this.network = network;
	}


	public String getSim() {
		return sim;
	}


	public void setSim(String sim) {
		this.sim = sim;
	}


	public String getRearCam() {
		return rearCam;
	}


	public void setRearCam(String rearCam) {
		this.rearCam = rearCam;
	}


	public String getFrontCam() {
		return frontCam;
	}


	public void setFrontCam(String frontCam) {
		this.frontCam = frontCam;
	}


	public String getDimensions() {
		return dimensions;
	}


	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}


	public Mobiles getMobile() {
		return mobile;
	}


	public void setMobile(Mobiles mobile) {
		this.mobile = mobile;
	}


	@Override
	public String toString() {
		return "Specifications [ram=" + ram + ", rom=" + rom + ", screenSize=" + screenSize + ", battery=" + battery
				+ ", os=" + os + ", network=" + network + ", sim=" + sim + ", rearCam=" + rearCam + ", frontCam="
				+ frontCam + ", dimensions=" + dimensions + "]";
	}
	
	
	
	
}
