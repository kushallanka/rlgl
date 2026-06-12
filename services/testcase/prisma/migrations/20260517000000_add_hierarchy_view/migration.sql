-- Diagnostic view: checks that every TestCase's suite, section, and project
-- references are mutually consistent. Used by the docker-entrypoint health check.
CREATE VIEW "hierarchy_consistency_check" AS
SELECT
    tc.id          AS testcase_id,
    tc.title       AS testcase_title,
    tc.projectId   AS testcase_project_id,
    tc.suiteId     AS testcase_suite_id,
    tc.sectionId   AS testcase_section_id,
    s.projectId    AS suite_project_id,
    sec.suiteId    AS section_suite_id,
    CASE
        WHEN s.id   IS NULL              THEN 'INCONSISTENT'
        WHEN sec.id IS NULL              THEN 'INCONSISTENT'
        WHEN s.projectId  != tc.projectId THEN 'INCONSISTENT'
        WHEN sec.suiteId  != tc.suiteId   THEN 'INCONSISTENT'
        ELSE 'CONSISTENT'
    END AS consistency_status
FROM   "TestCase" tc
LEFT JOIN "Suite"   s   ON tc.suiteId   = s.id
LEFT JOIN "Section" sec ON tc.sectionId = sec.id;
