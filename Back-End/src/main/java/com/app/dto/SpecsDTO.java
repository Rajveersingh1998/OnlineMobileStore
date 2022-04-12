package com.app.dto;

public class SpecsDTO {
	
	private int mid;
	
	private String ram;
	
	private String rom;
	
	private String ssize;
	
	private String battery;
	
	private String os;
	
	private String network;
	
	private String sim;

	private String rcam;
	
	private String fcam;
	
	private String dim;

	public SpecsDTO() {
		
	}

	public SpecsDTO(int mid, String ram, String rom, String ssize, String battery, String os, String network,
			String sim, String rcam, String fcam, String dim) {
		super();
		this.mid = mid;
		this.ram = ram;
		this.rom = rom;
		this.ssize = ssize;
		this.battery = battery;
		this.os = os;
		this.network = network;
		this.sim = sim;
		this.rcam = rcam;
		this.fcam = fcam;
		this.dim = dim;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
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

	public String getSsize() {
		return ssize;
	}

	public void setSsize(String ssize) {
		this.ssize = ssize;
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

	public String getRcam() {
		return rcam;
	}

	public void setRcam(String rcam) {
		this.rcam = rcam;
	}

	public String getFcam() {
		return fcam;
	}

	public void setFcam(String fcam) {
		this.fcam = fcam;
	}

	public String getDim() {
		return dim;
	}

	public void setDim(String dim) {
		this.dim = dim;
	}

	@Override
	public String toString() {
		return "SpecsDTO [mid=" + mid + ", ram=" + ram + ", rom=" + rom + ", ssize=" + ssize + ", battery=" + battery
				+ ", os=" + os + ", network=" + network + ", sim=" + sim + ", rcam=" + rcam + ", fcam=" + fcam
				+ ", dim=" + dim + "]";
	}
	
	
	
}
