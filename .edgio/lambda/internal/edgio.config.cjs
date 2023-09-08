// edgio.config.js
module.exports = {
  name: "hross-big-pic-sync-ef",
  organization: "test-team",
  origins: [
    {
      name: "origin",
      override_host_header: "test-origin.edgio.net",
      hosts: [
        {
          location: "test-origin.edgio.net"
        }
      ],
      tls_verify: {
        use_sni: true,
        sni_hint_and_strict_san_check: "test-origin.edgio.net"
      }
    }
  ]
};
//# sourceMappingURL=edgio.config.cjs.map
