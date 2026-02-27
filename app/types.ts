import type { ComponentType } from 'react'
import type { StaticImageData } from 'next/image'

export interface NavItem {
  name: string
  href: string
  external?: boolean
}

export interface HeadingSegment {
  text: string
  highlight?: boolean
}

export interface HeroButton {
  label: string
  href: string
  style: 'primary' | 'secondary'
}

export interface ProductConfig {
  name: string
  title: string
  description: string

  navigation: NavItem[]

  badge: string
  heading: HeadingSegment[][]
  subheading: string
  buttons: HeroButton[]

  heroImage: StaticImageData
  heroImageAlt: string
}

export interface PageProps {
  config: ProductConfig
}

export interface ProductDefinition {
  config: ProductConfig
  pages: {
    home: ComponentType<PageProps>
  }
}
