import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const qq = this.props.data.qq;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>自我简述</h2>
              <p className="Profile">
                    <span> > 喜欢听歌，拍照，运动</span>
                    <br />
                    <span> > 爱好计算机，会去自学自己感兴趣的一切东西</span>
                    <br />
                    <span> > 在我眼里，没有什么问题是尝试不能解决的，如果有那就多尝试几次甚至上百次</span>
                    <br />
                    <span> > 即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气</span>
               </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>联系方式</h2>
                  <p className="address">
                    <span>手机号码：{phone}</span>
                    <br />
                    <span>QQ号：{qq}</span>
                    <br />
                    <span>电子邮箱：{email}</span>
                    <br />
                    <span>联系地址：{city} {street}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>下载简历
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
