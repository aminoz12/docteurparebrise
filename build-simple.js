const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create out directory if it doesn't exist
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Try a simpler build approach
try {
  console.log('Starting simplified build...');
  
  // Set environment variables for the build
  process.env.NODE_ENV = 'production';
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  
  // Run next build with minimal configuration
  execSync('npx next build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_OPTIONS: '--max-old-space-size=16384',
      NEXT_TELEMETRY_DISABLED: '1'
    }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
