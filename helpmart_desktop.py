
import sys
import json
import os
from PyQt5.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                            QHBoxLayout, QLabel, QPushButton, QStackedWidget, 
                            QScrollArea, QGridLayout, QFrame, QLineEdit, QComboBox)
from PyQt5.QtCore import Qt, QPropertyAnimation, QEasingCurve, QPoint, QSize
from PyQt5.QtGui import QIcon, QPixmap, QFont, QColor, QPalette, QImage

# Mock data for items
MOCK_ITEMS = [
    {
        "id": "1",
        "title": "Children's School Bag",
        "description": "Slightly used school backpack in good condition. Blue color, multiple compartments.",
        "image": "images/school_bag.jpg",
        "points": 10,
        "category": "School Supplies",
        "location": "Karachi",
        "type": "item",
    },
    {
        "id": "2",
        "title": "Winter Clothes Bundle",
        "description": "Bundle of warm winter clothes including sweaters and jackets. Sizes for 6-8 year old children.",
        "image": "images/winter_clothes.jpg",
        "points": 15,
        "category": "Clothing",
        "location": "Lahore",
        "type": "item",
    },
    {
        "id": "3",
        "title": "Basic Math Tutoring",
        "description": "I can provide math tutoring for primary school students. One hour sessions, online or in-person.",
        "image": "images/tutoring.jpg",
        "points": 8,
        "category": "Education",
        "location": "Islamabad",
        "type": "service",
    },
    {
        "id": "4",
        "title": "Kitchen Utensils Set",
        "description": "Complete set of kitchen utensils including spatulas, spoons, and measuring cups. All in good condition.",
        "image": "images/kitchen_utensils.jpg",
        "points": 12,
        "category": "Household",
        "location": "Karachi",
        "type": "item",
    },
]

# Create a directory for images if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Theme colors
class Theme:
    LIGHT = {
        "background": "#FFFFFF",
        "foreground": "#1A1A1A",
        "primary": "#0EA5E9",
        "secondary": "#F5F5F5",
        "accent": "#22D3EE",
        "muted": "#9CA3AF"
    }
    
    DARK = {
        "background": "#1A1A1A",
        "foreground": "#FFFFFF",
        "primary": "#0EA5E9",
        "secondary": "#2A2A2A",
        "accent": "#22D3EE",
        "muted": "#6B7280"
    }

class ItemCard(QFrame):
    def __init__(self, item, parent=None):
        super().__init__(parent)
        self.item = item
        self.setObjectName("itemCard")
        self.setStyleSheet("""
            #itemCard {
                background-color: white;
                border-radius: 8px;
                border: 1px solid #E5E7EB;
            }
            #itemCard:hover {
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transform: translateY(-2px);
            }
        """)
        self.setFixedWidth(280)
        self.setFixedHeight(350)
        
        layout = QVBoxLayout(self)
        
        # Image placeholder
        image_label = QLabel()
        image_label.setFixedHeight(160)
        image_label.setStyleSheet("background-color: #F3F4F6; border-radius: 8px 8px 0 0;")
        image_label.setAlignment(Qt.AlignCenter)
        
        # If there's an image path, try to load it
        if os.path.exists(item["image"]):
            pixmap = QPixmap(item["image"])
            if not pixmap.isNull():
                pixmap = pixmap.scaled(280, 160, Qt.KeepAspectRatio, Qt.SmoothTransformation)
                image_label.setPixmap(pixmap)
        else:
            # Placeholder text if image is not available
            image_label.setText("Image Not Available")
        
        # Item details
        title_label = QLabel(item["title"])
        title_label.setStyleSheet("font-weight: bold; font-size: 16px;")
        title_label.setWordWrap(True)
        
        desc_label = QLabel(item["description"])
        desc_label.setStyleSheet("color: #6B7280; font-size: 14px;")
        desc_label.setWordWrap(True)
        desc_label.setFixedHeight(60)
        
        # Category and location
        info_layout = QHBoxLayout()
        category_label = QLabel(item["category"])
        category_label.setStyleSheet("background-color: #F3F4F6; padding: 4px 8px; border-radius: 4px; font-size: 12px;")
        
        location_label = QLabel(item["location"])
        location_label.setStyleSheet("color: #6B7280; font-size: 12px;")
        
        info_layout.addWidget(category_label)
        info_layout.addStretch()
        info_layout.addWidget(location_label)
        
        # Points
        points_label = QLabel(f"{item['points']} points")
        points_label.setStyleSheet("color: #0EA5E9; font-weight: bold; font-size: 16px;")
        
        # Exchange button
        exchange_btn = QPushButton("Exchange")
        exchange_btn.setStyleSheet("""
            QPushButton {
                background-color: #0EA5E9;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #0284C7;
            }
        """)
        
        layout.addWidget(image_label)
        layout.addWidget(title_label)
        layout.addWidget(desc_label)
        layout.addLayout(info_layout)
        layout.addWidget(points_label)
        layout.addWidget(exchange_btn)
        layout.setContentsMargins(12, 12, 12, 12)
        layout.setSpacing(8)
        
        # Animation effect on hover
        self.enterEvent = lambda e: self.setStyleSheet("""
            #itemCard {
                background-color: white;
                border-radius: 8px;
                border: 1px solid #E5E7EB;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
        """)
        
        self.leaveEvent = lambda e: self.setStyleSheet("""
            #itemCard {
                background-color: white;
                border-radius: 8px;
                border: 1px solid #E5E7EB;
            }
        """)

class HomePage(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.initUI()
        
    def initUI(self):
        layout = QVBoxLayout(self)
        
        # Hero section
        hero_widget = QWidget()
        hero_layout = QVBoxLayout(hero_widget)
        
        hero_title = QLabel("Exchange Essential Goods\nWithout Using Money")
        hero_title.setStyleSheet("font-size: 32px; font-weight: bold; color: #1A1A1A;")
        hero_title.setAlignment(Qt.AlignCenter)
        
        hero_subtitle = QLabel("HelpMart is a cost-free platform that allows low-income individuals to trade\nessential goods and services, fostering community support and reducing waste.")
        hero_subtitle.setStyleSheet("font-size: 16px; color: #6B7280;")
        hero_subtitle.setAlignment(Qt.AlignCenter)
        
        buttons_layout = QHBoxLayout()
        browse_btn = QPushButton("Start Browsing")
        browse_btn.setStyleSheet("""
            QPushButton {
                background-color: #0EA5E9;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 12px 24px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #0284C7;
            }
        """)
        
        learn_btn = QPushButton("Learn How It Works")
        learn_btn.setStyleSheet("""
            QPushButton {
                background-color: #F3F4F6;
                color: #1A1A1A;
                border: 1px solid #E5E7EB;
                border-radius: 4px;
                padding: 12px 24px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #E5E7EB;
            }
        """)
        
        buttons_layout.addWidget(browse_btn)
        buttons_layout.addWidget(learn_btn)
        buttons_layout.setAlignment(Qt.AlignCenter)
        
        hero_layout.addWidget(hero_title)
        hero_layout.addWidget(hero_subtitle)
        hero_layout.addLayout(buttons_layout)
        hero_layout.setAlignment(Qt.AlignCenter)
        hero_layout.setContentsMargins(20, 40, 20, 40)
        
        # Featured items section
        featured_label = QLabel("Featured Items & Services")
        featured_label.setStyleSheet("font-size: 24px; font-weight: bold; margin-top: 20px;")
        
        items_grid = QGridLayout()
        items_grid.setSpacing(16)
        
        # Add items to grid
        for i, item in enumerate(MOCK_ITEMS):
            row, col = i // 2, i % 2
            item_card = ItemCard(item)
            items_grid.addWidget(item_card, row, col, Qt.AlignCenter)
        
        items_widget = QWidget()
        items_widget.setLayout(items_grid)
        
        # How it works section
        how_it_works_widget = QWidget()
        how_layout = QVBoxLayout(how_it_works_widget)
        
        how_title = QLabel("How HelpMart Works")
        how_title.setStyleSheet("font-size: 24px; font-weight: bold;")
        how_title.setAlignment(Qt.AlignCenter)
        
        steps_layout = QHBoxLayout()
        steps = [
            {"title": "List Your Items", "desc": "Take photos and describe items you no longer need, or services you can offer."},
            {"title": "Find & Exchange", "desc": "Browse available items, propose trades, and use our point system for fair exchanges."},
            {"title": "Meet & Complete", "desc": "Arrange meet-ups for direct exchanges or use community drop-off points."},
            {"title": "Build Community", "desc": "Rate exchanges, build reputation, and help grow our supportive community network."}
        ]
        
        for i, step in enumerate(steps):
            step_widget = QFrame()
            step_widget.setObjectName(f"step{i}")
            step_widget.setStyleSheet(f"""
                #step{i} {{
                    background-color: white;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                    padding: 16px;
                }}
                #step{i}:hover {{
                    border-color: #0EA5E9;
                    background-color: #F0F9FF;
                }}
            """)
            
            step_layout = QVBoxLayout(step_widget)
            
            step_num = QLabel(f"{i+1}")
            step_num.setStyleSheet("""
                background-color: #0EA5E9;
                color: white;
                border-radius: 15px;
                font-weight: bold;
                padding: 5px;
            """)
            step_num.setAlignment(Qt.AlignCenter)
            step_num.setFixedSize(30, 30)
            
            step_title = QLabel(step["title"])
            step_title.setStyleSheet("font-weight: bold; font-size: 18px;")
            
            step_desc = QLabel(step["desc"])
            step_desc.setStyleSheet("color: #6B7280;")
            step_desc.setWordWrap(True)
            
            step_layout.addWidget(step_num, 0, Qt.AlignHCenter)
            step_layout.addWidget(step_title, 0, Qt.AlignHCenter)
            step_layout.addWidget(step_desc)
            
            steps_layout.addWidget(step_widget)
        
        how_layout.addWidget(how_title)
        how_layout.addLayout(steps_layout)
        how_layout.setContentsMargins(20, 40, 20, 40)
        
        # Add all sections to main layout
        layout.addWidget(hero_widget)
        layout.addWidget(featured_label)
        layout.addWidget(items_widget)
        layout.addWidget(how_it_works_widget)
        
        # Make it scrollable
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        
        container = QWidget()
        container.setLayout(layout)
        scroll.setWidget(container)
        
        main_layout = QVBoxLayout(self)
        main_layout.addWidget(scroll)
        main_layout.setContentsMargins(0, 0, 0, 0)

class BrowsePage(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.initUI()
        
    def initUI(self):
        layout = QVBoxLayout(self)
        
        # Header section
        header_widget = QWidget()
        header_layout = QVBoxLayout(header_widget)
        
        title = QLabel("Browse Exchanges")
        title.setStyleSheet("font-size: 28px; font-weight: bold;")
        title.setAlignment(Qt.AlignCenter)
        
        subtitle = QLabel("Explore available items and services that you can exchange using our points system.")
        subtitle.setStyleSheet("font-size: 16px; color: #6B7280;")
        subtitle.setAlignment(Qt.AlignCenter)
        
        header_layout.addWidget(title)
        header_layout.addWidget(subtitle)
        header_layout.setContentsMargins(20, 40, 20, 20)
        
        # Filter section
        filter_widget = QWidget()
        filter_layout = QHBoxLayout(filter_widget)
        
        search_input = QLineEdit()
        search_input.setPlaceholderText("Search items...")
        search_input.setStyleSheet("""
            QLineEdit {
                border: 1px solid #E5E7EB;
                border-radius: 4px;
                padding: 8px;
                font-size: 14px;
            }
        """)
        
        category_filter = QComboBox()
        category_filter.addItem("All Categories")
        category_filter.addItems(["School Supplies", "Clothing", "Education", "Household", "Services", "Books"])
        category_filter.setStyleSheet("""
            QComboBox {
                border: 1px solid #E5E7EB;
                border-radius: 4px;
                padding: 8px;
                font-size: 14px;
            }
        """)
        
        type_filter = QComboBox()
        type_filter.addItem("All Types")
        type_filter.addItems(["Item", "Service"])
        type_filter.setStyleSheet("""
            QComboBox {
                border: 1px solid #E5E7EB;
                border-radius: 4px;
                padding: 8px;
                font-size: 14px;
            }
        """)
        
        filter_layout.addWidget(search_input)
        filter_layout.addWidget(category_filter)
        filter_layout.addWidget(type_filter)
        
        # Items grid
        items_grid = QGridLayout()
        items_grid.setSpacing(16)
        
        # Add all items to grid
        for i, item in enumerate(MOCK_ITEMS):
            row, col = i // 3, i % 3
            item_card = ItemCard(item)
            items_grid.addWidget(item_card, row, col, Qt.AlignCenter)
        
        items_widget = QWidget()
        items_widget.setLayout(items_grid)
        
        # Add everything to main layout
        layout.addWidget(header_widget)
        layout.addWidget(filter_widget)
        layout.addWidget(items_widget)
        layout.setAlignment(Qt.AlignTop)
        
        # Make it scrollable
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        
        container = QWidget()
        container.setLayout(layout)
        scroll.setWidget(container)
        
        main_layout = QVBoxLayout(self)
        main_layout.addWidget(scroll)
        main_layout.setContentsMargins(0, 0, 0, 0)

class HelpMartApp(QMainWindow):
    def __init__(self):
        super().__init__()
        
        self.current_theme = "light"
        self.initUI()
        
    def initUI(self):
        self.setWindowTitle('HelpMart - Exchange Platform')
        self.setGeometry(100, 100, 1200, 800)
        
        # Apply theme
        self.apply_theme(self.current_theme)
        
        # Main widget and layout
        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        
        main_layout = QVBoxLayout(main_widget)
        main_layout.setContentsMargins(0, 0, 0, 0)
        main_layout.setSpacing(0)
        
        # Header
        header = QWidget()
        header.setObjectName("header")
        header.setStyleSheet("""
            #header {
                background-color: white;
                border-bottom: 1px solid #E5E7EB;
            }
        """)
        header.setFixedHeight(70)
        
        header_layout = QHBoxLayout(header)
        
        logo = QLabel("HelpMart")
        logo.setStyleSheet("font-size: 24px; font-weight: bold; color: #0EA5E9;")
        
        nav_layout = QHBoxLayout()
        nav_buttons = ["Home", "Browse", "How It Works", "About"]
        
        for text in nav_buttons:
            btn = QPushButton(text)
            btn.setStyleSheet("""
                QPushButton {
                    background-color: transparent;
                    border: none;
                    padding: 8px 16px;
                    font-size: 16px;
                }
                QPushButton:hover {
                    color: #0EA5E9;
                }
            """)
            nav_layout.addWidget(btn)
        
        theme_btn = QPushButton("🌙 Dark")
        theme_btn.setStyleSheet("""
            QPushButton {
                background-color: #F3F4F6;
                border: 1px solid #E5E7EB;
                border-radius: 4px;
                padding: 8px 16px;
            }
            QPushButton:hover {
                background-color: #E5E7EB;
            }
        """)
        theme_btn.clicked.connect(self.toggle_theme)
        
        sign_in_btn = QPushButton("Sign In")
        sign_in_btn.setStyleSheet("""
            QPushButton {
                background-color: white;
                border: 1px solid #0EA5E9;
                color: #0EA5E9;
                border-radius: 4px;
                padding: 8px 16px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #F0F9FF;
            }
        """)
        
        sign_up_btn = QPushButton("Sign Up")
        sign_up_btn.setStyleSheet("""
            QPushButton {
                background-color: #0EA5E9;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #0284C7;
            }
        """)
        
        header_layout.addWidget(logo)
        header_layout.addStretch()
        header_layout.addLayout(nav_layout)
        header_layout.addStretch()
        header_layout.addWidget(theme_btn)
        header_layout.addWidget(sign_in_btn)
        header_layout.addWidget(sign_up_btn)
        header_layout.setContentsMargins(20, 0, 20, 0)
        
        # Content area with stacked widget for different pages
        self.content = QStackedWidget()
        
        # Create pages
        self.home_page = HomePage()
        self.browse_page = BrowsePage()
        
        # Add pages to stack
        self.content.addWidget(self.home_page)
        self.content.addWidget(self.browse_page)
        
        # Connect buttons to page changes
        nav_buttons_widgets = [btn for btn in header.findChildren(QPushButton) if btn.text() in nav_buttons]
        nav_buttons_widgets[0].clicked.connect(lambda: self.content.setCurrentIndex(0))
        nav_buttons_widgets[1].clicked.connect(lambda: self.content.setCurrentIndex(1))
        
        # Footer
        footer = QWidget()
        footer.setObjectName("footer")
        footer.setStyleSheet("""
            #footer {
                background-color: #F9FAFB;
                border-top: 1px solid #E5E7EB;
            }
        """)
        footer.setFixedHeight(70)
        
        footer_layout = QHBoxLayout(footer)
        
        copyright = QLabel("© 2024 HelpMart. All rights reserved.")
        copyright.setStyleSheet("color: #6B7280;")
        
        footer_layout.addWidget(copyright)
        footer_layout.addStretch()
        footer_layout.setContentsMargins(20, 0, 20, 0)
        
        # Add everything to main layout
        main_layout.addWidget(header)
        main_layout.addWidget(self.content)
        main_layout.addWidget(footer)
        
    def toggle_theme(self):
        if self.current_theme == "light":
            self.apply_theme("dark")
            self.sender().setText("☀️ Light")
        else:
            self.apply_theme("light")
            self.sender().setText("🌙 Dark")
    
    def apply_theme(self, theme_name):
        self.current_theme = theme_name
        if theme_name == "light":
            theme = Theme.LIGHT
            self.setStyleSheet(f"""
                QWidget {{
                    background-color: {theme['background']};
                    color: {theme['foreground']};
                }}
                QScrollArea {{
                    background-color: {theme['background']};
                    border: none;
                }}
                #header, #footer {{
                    background-color: {theme['secondary']};
                }}
            """)
        else:
            theme = Theme.DARK
            self.setStyleSheet(f"""
                QWidget {{
                    background-color: {theme['background']};
                    color: {theme['foreground']};
                }}
                QScrollArea {{
                    background-color: {theme['background']};
                    border: none;
                }}
                #header, #footer {{
                    background-color: {theme['secondary']};
                }}
            """)
        
        # Update all buttons, cards, etc with new theme colors
        # This would be expanded with more detailed styling

if __name__ == '__main__':
    app = QApplication(sys.argv)
    app.setStyle('Fusion')  # For a consistent look across platforms
    
    window = HelpMartApp()
    window.show()
    
    sys.exit(app.exec_())
