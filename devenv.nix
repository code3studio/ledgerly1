{ pkgs, config, lib, ... }:

# See full reference at https://devenv.sh/reference/options/
{
  packages = with pkgs; [
    d2 # https://d2lang.com/
  ];

  # https://devenv.sh/languages/
  languages.nix.enable = true;
  languages.typescript.enable = true;

  process.implementation = "process-compose";

  processes =
    let
      d2-file-to-process = filename:
        {
          exec = ''
            exec ${pkgs.d2}/bin/d2 --theme="200" \
              --layout=elk -w --pad=70 \
              --elk-algorithm=layered \
              --elk-nodeNodeBetweenLayers=10 \
              --elk-padding="[top=10,left=10,bottom=10,right=10]" \
              --elk-edgeNodeBetweenLayers=60 \
              --elk-nodeSelfLoop=10 \
              d2/${filename}.d2 \
              public/static/images/${filename}.svg
          '';
          process-compose = {
            namespace = "d2";
            disabled = true; # start manually
            availability.restart = "always";
          };
        };
    in
    {
      nextjs = {
        exec = "exec yarn dev";
        process-compose = {
          availability.restart = "on_failure";
        };
      };
      env-sync = (d2-file-to-process "env-sync");
      env-sync-vertical = (d2-file-to-process "env-sync-vertical");
      spreadsheet-import = (d2-file-to-process "spreadsheet-import");
      spreadsheet-import-vertical = (d2-file-to-process "spreadsheet-import-vertical");
    };

  pre-commit.hooks = {
    nixpkgs-fmt.enable = true;
    shellcheck.enable = true;
    # markdownlint.enable = true;
  };
  pre-commit.settings.markdownlint.config = {
    MD013 = {
      line_length = 120;
    };
    MD033 = false;
    MD034 = false;
  };

  enterShell = ''
    ln -sf ${config.process-managers.process-compose.configFile} ${config.env.DEVENV_ROOT}/process-compose.yml
  '';

  # devenv.debug = true;
}
