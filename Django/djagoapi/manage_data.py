#!/usr/bin/env python
"""
Data Management Script for Portfolio API
Usage: python manage_data.py [command] [options]

Commands:
  add-sample     Add sample data
  clear-all      Clear all data
  add-blog       Add a single blog post
  add-portfolio  Add a single portfolio project
  list-blogs     List all blog posts
  list-portfolio List all portfolio projects
"""

import os
import sys
import django
import argparse
from datetime import date

# Add the project directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djagoapi.settings')
django.setup()

from blogapi.models import Blog
from portfolioapi.models import Portfolio

def add_sample_data():
    """Add sample blog posts and portfolio projects"""
    print("Adding sample data...")
    
    # Sample blog posts
    blog_posts = [
        {
            'name': 'Getting Started with React',
            'description': 'A comprehensive guide to building modern web applications with React. Learn the fundamentals, hooks, and best practices.',
            'tags': 'React, JavaScript, Web Development, Tutorial',
            'published': date(2024, 1, 15)
        },
        {
            'name': 'Django REST Framework Best Practices',
            'description': 'Learn how to build robust APIs with Django REST Framework. Covers serializers, viewsets, and authentication.',
            'tags': 'Django, Python, API, Backend',
            'published': date(2024, 2, 10)
        },
        {
            'name': 'CSS Grid vs Flexbox',
            'description': 'A detailed comparison of CSS Grid and Flexbox layout systems. When to use each and practical examples.',
            'tags': 'CSS, Layout, Frontend, Design',
            'published': date(2024, 2, 25)
        },
        {
            'name': 'Building Scalable APIs',
            'description': 'Best practices for designing and implementing scalable REST APIs that can handle high traffic and complex requirements.',
            'tags': 'API, Architecture, Scalability, Backend',
            'published': date(2024, 3, 5)
        }
    ]

    # Sample portfolio projects
    portfolio_projects = [
        {
            'name': 'E-commerce Platform',
            'description': 'A full-stack e-commerce application built with React and Django. Features include user authentication, product catalog, shopping cart, and payment integration.',
            'tech': 'React, Django, PostgreSQL, Stripe, Docker',
            'users': '500+',
            'status': 'Completed',
            'repos': 'https://github.com/example/ecommerce',
            'type': 'Web Application'
        },
        {
            'name': 'Task Management App',
            'description': 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            'tech': 'Next.js, Node.js, Socket.io, MongoDB',
            'users': '200+',
            'status': 'In Progress',
            'repos': 'https://github.com/example/taskmanager',
            'type': 'Web Application'
        },
        {
            'name': 'Weather Dashboard',
            'description': 'A responsive weather dashboard that displays current conditions and forecasts for multiple cities with interactive charts.',
            'tech': 'Vue.js, Chart.js, OpenWeather API',
            'users': '1000+',
            'status': 'Completed',
            'repos': 'https://github.com/example/weather-dashboard',
            'type': 'Dashboard'
        },
        {
            'name': 'AI Chatbot',
            'description': 'An intelligent chatbot powered by machine learning that can answer questions and provide customer support.',
            'tech': 'Python, TensorFlow, Flask, OpenAI API',
            'users': '50+',
            'status': 'Completed',
            'repos': 'https://github.com/example/ai-chatbot',
            'type': 'AI/ML'
        }
    ]

    # Add blog posts
    for post_data in blog_posts:
        blog, created = Blog.objects.get_or_create(
            name=post_data['name'],
            defaults=post_data
        )
        if created:
            print(f"✅ Added blog post: {blog.name}")
        else:
            print(f"⚠️  Blog post already exists: {blog.name}")

    # Add portfolio projects
    for project_data in portfolio_projects:
        project, created = Portfolio.objects.get_or_create(
            name=project_data['name'],
            defaults=project_data
        )
        if created:
            print(f"✅ Added portfolio project: {project.name}")
        else:
            print(f"⚠️  Portfolio project already exists: {project.name}")

    print(f"\n📊 Summary:")
    print(f"   Blog posts: {Blog.objects.count()}")
    print(f"   Portfolio projects: {Portfolio.objects.count()}")

def clear_all_data():
    """Clear all blog posts and portfolio projects"""
    print("Clearing all data...")
    
    blog_count = Blog.objects.count()
    portfolio_count = Portfolio.objects.count()
    
    Blog.objects.all().delete()
    Portfolio.objects.all().delete()
    
    print(f"✅ Deleted {blog_count} blog posts")
    print(f"✅ Deleted {portfolio_count} portfolio projects")

def add_blog_post():
    """Add a single blog post interactively"""
    print("\n📝 Add New Blog Post")
    print("=" * 30)
    
    name = input("Title: ")
    description = input("Description: ")
    tags = input("Tags (comma-separated): ")
    
    blog = Blog.objects.create(
        name=name,
        description=description,
        tags=tags,
        published=date.today()
    )
    
    print(f"✅ Created blog post: {blog.name} (ID: {blog.id})")

def add_portfolio_project():
    """Add a single portfolio project interactively"""
    print("\n💼 Add New Portfolio Project")
    print("=" * 35)
    
    name = input("Project Name: ")
    description = input("Description: ")
    tech = input("Technologies (comma-separated): ")
    users = input("Number of users: ")
    status = input("Status (Completed/In Progress/Planning): ")
    repos = input("Repository URL: ")
    project_type = input("Project Type: ")
    
    project = Portfolio.objects.create(
        name=name,
        description=description,
        tech=tech,
        users=users,
        status=status,
        repos=repos,
        type=project_type
    )
    
    print(f"✅ Created portfolio project: {project.name} (ID: {project.id})")

def list_blogs():
    """List all blog posts"""
    blogs = Blog.objects.all().order_by('-published')
    print(f"\n📝 Blog Posts ({blogs.count()})")
    print("=" * 50)
    
    for blog in blogs:
        print(f"ID: {blog.id}")
        print(f"Title: {blog.name}")
        print(f"Published: {blog.published}")
        print(f"Tags: {blog.tags}")
        print(f"Description: {blog.description[:100]}...")
        print("-" * 50)

def list_portfolio():
    """List all portfolio projects"""
    projects = Portfolio.objects.all().order_by('-id')
    print(f"\n💼 Portfolio Projects ({projects.count()})")
    print("=" * 50)
    
    for project in projects:
        print(f"ID: {project.id}")
        print(f"Name: {project.name}")
        print(f"Status: {project.status}")
        print(f"Type: {project.type}")
        print(f"Users: {project.users}")
        print(f"Tech: {project.tech}")
        print(f"Description: {project.description[:100]}...")
        print("-" * 50)

def main():
    parser = argparse.ArgumentParser(description='Manage Portfolio API Data')
    parser.add_argument('command', choices=[
        'add-sample', 'clear-all', 'add-blog', 'add-portfolio', 
        'list-blogs', 'list-portfolio'
    ], help='Command to execute')
    
    args = parser.parse_args()
    
    if args.command == 'add-sample':
        add_sample_data()
    elif args.command == 'clear-all':
        confirm = input("Are you sure you want to delete ALL data? (yes/no): ")
        if confirm.lower() == 'yes':
            clear_all_data()
        else:
            print("❌ Operation cancelled")
    elif args.command == 'add-blog':
        add_blog_post()
    elif args.command == 'add-portfolio':
        add_portfolio_project()
    elif args.command == 'list-blogs':
        list_blogs()
    elif args.command == 'list-portfolio':
        list_portfolio()

if __name__ == '__main__':
    main()



