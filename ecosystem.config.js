module.exports = {
  apps: [
    {
      name: 'qursar_testnet_miner', // Name of the application
      script: 'neurons/miner_test.py', // Path to your script
      interpreter: 'python', // Use the Python interpreter
      args: '--netuid 439 --wallet.name test --wallet.hotkey miner-1 --axon.port 8092 --subtensor.network test --subtensor.chain_endpoint wss://test.finney.opentensor.ai:443  --logging.debug', // Arguments to pass
      instances: 1, // Number of instances to run
      exec_mode: 'fork', // Can be 'fork' or 'cluster'
      env: {
        NODE_ENV: 'production', // Set environment variables
      },
      log_file: './logs/qursar_testnet_miner.log', // Log file path
      out_file: './logs/qursar_testnet_miner_out.log', // Standard output log
      error_file: './logs/qursar_testnet_miner_err.log', // Error log
      merge_logs: true, // Merge logs from all instances
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Set to true to watch for file changes
    },
  ],
};
