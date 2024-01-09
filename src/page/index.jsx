import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='navbar-account'>
        <div className='nav-top'>
          <div className='company-icon-image'>
            <div className='rectangle' />
            <div className='frame'>
              <span className='nishyan'>Nishyan</span>
              <span className='visit-store'>Visit store</span>
            </div>
            <div className='image' />
            <div className='bold-chevron-down' />
          </div>
          <div className='pages'>
            <div className='base-nav-button'>
              <div className='navbar-icon' />
              <span className='home'>Home</span>
            </div>
            <div className='base-nav-button-1'>
              <div className='navbar-icon-2' />
              <span className='orders'>Orders</span>
            </div>
            <div className='base-nav-button-3'>
              <div className='navbar-icon-4' />
              <span className='products'>Products</span>
            </div>
            <div className='base-nav-button-5'>
              <div className='navbar-icon-6' />
              <span className='home-delivery'>Delivery</span>
            </div>
            <div className='base-nav-button-7'>
              <div className='navbar-icon-8' />
              <span className='home-marketing'>Marketing</span>
            </div>
            <div className='base-nav-button-9'>
              <div className='navbar-icon-a' />
              <span className='home-analytics'>Analytics</span>
            </div>
            <div className='base-nav-button-b'>
              <div className='navbar-icon-c' />
              <span className='home-payouts'>Payouts</span>
            </div>
            <div className='base-nav-button-d'>
              <div className='navbar-icon-e' />
              <span className='home-discounts'>Discounts</span>
            </div>
            <div className='base-nav-button-f'>
              <div className='navbar-icon-10' />
              <span className='home-audience'>Audience</span>
            </div>
            <div className='base-nav-button-11'>
              <div className='navbar-icon-12' />
              <span className='home-appearance'>Appearance</span>
            </div>
            <div className='base-nav-button-13'>
              <div className='navbar-icon-14' />
              <span className='home-plugins'>Plugins</span>
            </div>
          </div>
        </div>
        <div className='base-nav-bottom'>
          <div className='frame-15'>
            <div className='frame-16'>
              <div className='outline-wallet' />
            </div>
            <div className='frame-17'>
              <span className='available-credits'>Available credits</span>
              <span className='dot'>222.10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
