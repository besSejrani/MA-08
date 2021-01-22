-- title:   CreateDatabase Ecomemrce.sql
-- Date:    21.01.2021
-- Author:  Besjan Sejrani
-- Goal:    Create ecommerce database for school project

---------------------------------------------------------------

-- Select Master database
USE master
GO

-- Delete database if it exists
IF (EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = 'Ecommerce'))
BEGIN
	USE master

    -- Disconnect users
	ALTER DATABASE Ecommerce SET SINGLE_USER WITH ROLLBACK IMMEDIATE

     -- Drop database
	DROP DATABASE Ecommerce
END
GO

CREATE TABLE #ResultSet (Directory varchar(200))

INSERT INTO #ResultSet EXEC master.sys.xp_subdirs 'c:\'

IF NOT EXISTS (Select * FROM #ResultSet where Directory = 'files')
	EXEC master.sys.xp_create_subdir 'C:\files\'

DELETE FROM #ResultSet
INSERT INTO #ResultSet EXEC master.sys.xp_subdirs 'c:\files'

IF NOT EXISTS (Select * FROM #ResultSet where Directory = 'MSSQL')
	EXEC master.sys.xp_create_subdir 'C:\files\MSSQL'

DROP TABLE #ResultSet
GO

-- Create database
CREATE DATABASE Ecommerce ON  PRIMARY 
( NAME = 'Ecommerce_data', FILENAME = 'C:\files\MSSQL\Ecommerce.mdf' , SIZE = 20480KB , MAXSIZE = 51200KB , FILEGROWTH = 1024KB )
 LOG ON 
( NAME = 'Ecommerce_log', FILENAME = 'C:\files\MSSQL\Ecommerce.ldf' , SIZE = 10240KB , MAXSIZE = 20480KB , FILEGROWTH = 1024KB )
GO

---------------------------------------------------------------

-- Tables

USE Ecommerce
GO

create table users(
	id int identity(1,1) not null primary key,
    username varchar(50) not null, 
	firstname varchar(50) not null,
    lastname varchar(50) not null,
    email varchar(50) unique not null,
    password varchar(65) not null,
    url_profile varchar(8000),
    address varchar(65),
    city varchar(50),
    zip int
)

create table pages (
    id int identity(1,1) not null primary key,
    title varchar(50) not null,
    description varchar(250) not null,
    url_page varchar(8000) not null,
    created_at datetime,
    updated_at datetime
)

create table roles (
    id int identity (1,1) not null primary key,
    name varchar(50) not null
)

create table events (
    id int identity(1,1) not null primary key,
    name varchar(50) not null, 
    description varchar(250) not null,
    address varchar(65) not null,
    start_date date not null,
    end_date date not null, 
    city varchar(50),
    zip varchar(50),
    lat geography,
    lng geography,
    created_at datetime,
    updated_at datetime
)

create table carts (
    id int identity(1,1) not null primary key,
    created_at datetime,
    updated_at datetime
)

create table discounts (
    id int identity(1,1) not null primary key,
    rebate bit not null,
    from_date datetime not null,
    to_date datetime not null,
    created_at datetime not null
)

create table orders (
    id int identity(1,1) not null primary key,
    total_amount decimal not null,
    tracking_number VARCHAR(8000),
    created_at datetime not null
)

create table products (
    id int identity(1,1) not null primary key,
    name varchar(50) not null,
    description_francais varchar(50) not null,
    description_deutsch varchar(50) not null,
    description_english varchar(50) not null,
    price int not null,
)

create table suppliers (
    id int identity(1,1) not null primary key,
    name varchar(50) not null,
    email varchar(50) not null,
    address varchar(50) not null,
    phone varchar(50) not null,
    country varchar(50) not null
)

---------------------------------------------------------------

-- Joins

create table suppliers_supply_products (
    id int identity(1,1) not null primary key,
    product_id int foreign key (product_id) REFERENCES products(id) on delete cascade,
    supplier_id int foreign key (supplier_id) REFERENCES suppliers(id) on delete cascade,
)

create table products_add_carts (
    id int identity(1,1) not null primary key,
    cart_id int foreign key (cart_id) REFERENCES carts(id),
    product_id int foreign key (product_id) REFERENCES products(id),
)

create table users_own_carts (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    event_id int foreign key (event_id) REFERENCES events(id),
)

create table users_participate_events (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    event_id int foreign key (event_id) REFERENCES events(id),
)

create table users_has_roles (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    role_id int foreign key (role_id) REFERENCES roles(id),
)

create table users_configure_pages (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    page_id int foreign key (page_id) REFERENCES pages(id),
)

create table users_create_discounts (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    discount_id int foreign key (discount_id) REFERENCES discounts(id),
)

create table users_perform_orders (
    id int identity(1,1) not null primary key,
    user_id int foreign key (user_id) REFERENCES users(id),
    order_id int foreign key (order_id) REFERENCES orders(id),
)

create table orders_apply_discounts (
    id int identity(1,1) not null primary key,
    discount_id int foreign key (discount_id) REFERENCES discounts(id),
    order_id int foreign key (order_id) REFERENCES orders(id),
)

create table orders_contain_products (
    id int identity(1,1) not null primary key,
    order_id int foreign key (order_id) REFERENCES orders(id),
    product_id int foreign key (product_id) REFERENCES products(id),
)