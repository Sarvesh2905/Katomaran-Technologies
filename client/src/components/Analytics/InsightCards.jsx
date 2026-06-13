import { TrendingUp, TrendingDown, Smartphone, Globe, MapPin, Flame, Lightbulb, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  'trending-up':   { Icon: TrendingUp,   color: '#DEB16E', bg: 'rgba(222,177,110,0.1)',  border: 'rgba(222,177,110,0.25)' },
  'trending-down': { Icon: TrendingDown, color: '#BA5054', bg: 'rgba(186,80,84,0.1)',    border: 'rgba(186,80,84,0.25)' },
  'smartphone':    { Icon: Smartphone,   color: '#D69B82', bg: 'rgba(214,155,130,0.1)',  border: 'rgba(214,155,130,0.25)' },
  'globe':         { Icon: Globe,        color: '#D69B82', bg: 'rgba(214,155,130,0.1)',  border: 'rgba(214,155,130,0.25)' },
  'map-pin':       { Icon: MapPin,       color: '#BA5054', bg: 'rgba(186,80,84,0.1)',    border: 'rgba(186,80,84,0.25)' },
  'clock':         { Icon: Clock,        color: '#DEB16E', bg: 'rgba(222,177,110,0.1)',  border: 'rgba(222,177,110,0.25)' },
  'lightbulb':     { Icon: Lightbulb,    color: '#DEB16E', bg: 'rgba(222,177,110,0.08)', border: 'rgba(222,177,110,0.2)' }
}

export const InsightCards = ({ insights = [] }) => {
  if (!insights?.length) return null

  return (
    <div className="grid gap-3">
      {insights.map((insight, i) => {
        const { Icon, color, bg, border } = iconMap[insight.icon] || iconMap['globe']
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{ background: bg, border: `1px solid ${border}` }}
          >
            <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {insight.message}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}