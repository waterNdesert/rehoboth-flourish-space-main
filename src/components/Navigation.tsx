import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-serif font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Rehoboth for Families
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Our Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-2 p-4">
                    <li>
                      <Link to="/community/men">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Men
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/community/women">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Women
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/community/youth">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Our Youth
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/gallery">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/prayer">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Prayer Ministry
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/team">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    The Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Our Missions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-2 p-4">
                    <li>
                      <Link to="/missions/nigeria">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Nigeria
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/missions/uganda">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Uganda
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/missions/ghana">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Ghana
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/missions/zambia">
                        <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Zambia
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {mounted && (
                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full"
                    title={`Switch to ${
                      theme === "light" ? "dark" : "light"
                    } mode`}
                  >
                    {theme === "light" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </Button>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Dark Mode Toggle */}
        {mounted && (
          <div className="absolute right-20 top-5 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <details className="group">
                <summary className="text-sm font-medium py-2 hover:text-primary cursor-pointer list-none flex items-center justify-between">
                  Our Community
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/community/men"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Men
                  </Link>
                  <Link
                    to="/community/women"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Women
                  </Link>
                  <Link
                    to="/community/youth"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Our Youth
                  </Link>
                </div>
              </details>
              <Link
                to="/about"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/prayer"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Prayer Ministry
              </Link>
              <Link
                to="/team"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                The Team
              </Link>
              <details className="group">
                <summary className="text-sm font-medium py-2 hover:text-primary cursor-pointer list-none flex items-center justify-between">
                  Our Missions
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/missions/nigeria"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Nigeria
                  </Link>
                  <Link
                    to="/missions/uganda"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Uganda
                  </Link>
                  <Link
                    to="/missions/ghana"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Ghana
                  </Link>
                  <Link
                    to="/missions/zambia"
                    className="block text-sm py-1.5 hover:text-primary transition-colors"
                  >
                    Zambia
                  </Link>
                </div>
              </details>
              <Link
                to="/contact"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
